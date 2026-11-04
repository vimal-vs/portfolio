import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import worldDots from "../../data/worldDots.json";

const { width: MAP_WIDTH, height: MAP_HEIGHT } = worldDots;
const WORLD_VIEW = { x: 0, y: 0, w: MAP_WIDTH, h: MAP_HEIGHT };
const MIN_ZOOM_WIDTH = 170;
const EASE = [0.22, 1, 0.36, 1];

const toX = (lon) => (lon + 180) * worldDots.scale;
const toY = (lat) => (worldDots.top - lat) * worldDots.scale;
const lerp = (from, to, progress) => from + (to - from) * progress;
const clamp = (value, max) => Math.min(Math.max(value, 0), max);

const routePath = (from, to) => {
  const [x1, y1, x2, y2] = [
    toX(from.lon),
    toY(from.lat),
    toX(to.lon),
    toY(to.lat),
  ];
  const lift = Math.hypot(x2 - x1, y2 - y1) * 0.35;
  return `M${x1} ${y1}Q${(x1 + x2) / 2} ${(y1 + y2) / 2 - lift} ${x2} ${y2}`;
};

const viewAround = (places) => {
  const xs = places.map((place) => toX(place.lon));
  const ys = places.map((place) => toY(place.lat));
  const [minX, maxX, minY, maxY] = [
    Math.min(...xs),
    Math.max(...xs),
    Math.min(...ys),
    Math.max(...ys),
  ];
  const aspect = MAP_WIDTH / MAP_HEIGHT;
  const w = Math.max(
    MIN_ZOOM_WIDTH,
    (maxX - minX) * 3,
    (maxY - minY) * 3 * aspect,
  );
  const h = w / aspect;
  return {
    x: clamp((minX + maxX) / 2 - w / 2, MAP_WIDTH - w),
    y: clamp((minY + maxY) / 2 - h / 2, MAP_HEIGHT - h),
    w,
    h,
  };
};

export default function WorldMap({
  home,
  explored,
  upcoming,
  active,
  focus,
  highlight,
  onReset,
}) {
  const places = [home, ...explored, ...upcoming];
  const isActive = (place) => place.name === active || place.country === active;
  const activePlace = places.find(isActive);
  const routes = explored.filter(
    (place, index) =>
      explored.findIndex((other) => other.country === place.country) === index,
  );

  const mapRef = useRef(null);
  const inView = useInView(mapRef, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [arrowStart, setArrowStart] = useState(null);

  const [view, setView] = useState(WORLD_VIEW);
  const viewRef = useRef(WORLD_VIEW);
  useEffect(() => {
    const focused = places.filter(
      (place) => place.name === focus || place.country === focus,
    );
    const target = focused.length ? viewAround(focused) : WORLD_VIEW;
    const from = viewRef.current;
    if (Object.keys(target).every((key) => target[key] === from[key])) return;
    const controls = animate(0, 1, {
      duration: reduceMotion ? 0 : 0.9,
      ease: EASE,
      onUpdate: (progress) => {
        const next = {
          x: lerp(from.x, target.x, progress),
          y: lerp(from.y, target.y, progress),
          w: lerp(from.w, target.w, progress),
          h: lerp(from.h, target.h, progress),
        };
        viewRef.current = next;
        setView(next);
      },
    });
    return () => controls.stop();
  }, [focus, reduceMotion]);

  const unit = view.w / MAP_WIDTH;
  const left = (place) => `${((toX(place.lon) - view.x) / view.w) * 100}%`;
  const top = (place) => `${((toY(place.lat) - view.y) / view.h) * 100}%`;
  const isInView = (place) => {
    const [x, y] = [
      (toX(place.lon) - view.x) / view.w,
      (toY(place.lat) - view.y) / view.h,
    ];
    return x > 0.05 && x < 0.95 && y > 0.1 && y < 0.95;
  };

  const labelled =
    focus && view.w < MAP_WIDTH / 3 ? places.filter(isInView) : [];
  const lowest = labelled.reduce(
    (low, place) => (!low || place.lat < low.lat ? place : low),
    null,
  );

  return (
    <div className="relative">
      <svg
        ref={mapRef}
        viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
        role="img"
        aria-label={`World map marking ${home.name} as home, ${explored.map((place) => place.name).join(" and ")} as explored, and ${upcoming.map((place) => place.name).join(", ")} as upcoming.`}
        className="block h-auto w-full"
      >
        <defs>
          {routes.map((place) => (
            <mask
              key={place.name}
              id={`route-${place.country}`}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
            >
              <motion.path
                d={routePath(home, place)}
                stroke="white"
                strokeWidth={6 * unit}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.6,
                  delay: reduceMotion ? 0 : 0.3,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                  if (inView)
                    setArrowStart(
                      (start) => start ?? mapRef.current.getCurrentTime(),
                    );
                }}
              />
            </mask>
          ))}
        </defs>
        <path
          d={worldDots.path}
          className="stroke-mute/40"
          strokeWidth={4 * Math.sqrt(unit)}
          strokeLinecap="round"
          fill="none"
        />
        {routes.map((place) => (
          <path
            key={place.name}
            d={routePath(home, place)}
            mask={`url(#route-${place.country})`}
            className="stroke-signal/70"
            strokeWidth={2 * unit}
            strokeDasharray={`${5 * unit} ${5 * unit}`}
            fill="none"
          />
        ))}
        {arrowStart !== null &&
          routes.map((place) => (
            <g key={place.name}>
              <animateMotion
                path={routePath(home, place)}
                rotate="auto"
                begin={`${arrowStart}s`}
                dur={reduceMotion ? "0.001s" : "3s"}
                repeatCount={reduceMotion ? "1" : "indefinite"}
                fill="freeze"
                calcMode="spline"
                keyPoints="0;1;1"
                keyTimes="0;0.75;1"
                keySplines="0.4 0 0.2 1;0 0 1 1"
              />
              {!reduceMotion && (
                <animate
                  attributeName="opacity"
                  begin={`${arrowStart}s`}
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;1;1;0;0"
                  keyTimes="0;0.08;0.68;0.75;1"
                />
              )}
              <polygon
                points={`${10 * unit},0 ${-6 * unit},${-3.5 * unit} ${-6 * unit},${3.5 * unit}`}
                className="fill-signal"
              />
            </g>
          ))}
        {upcoming.map((place) => (
          <g
            key={place.name}
            {...highlight(place.name)}
            className="cursor-pointer"
          >
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={14 * unit}
              fill="transparent"
            />
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={(active === place.name ? 9 : 6.5) * unit}
              className="fill-panel stroke-signal transition-all"
              strokeWidth={3 * unit}
            />
          </g>
        ))}
        {explored.map((place) => (
          <g
            key={place.name}
            {...highlight(place.name, place.country)}
            className="cursor-pointer"
          >
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={6.5 * unit}
              className="pinPulse fill-signal"
            />
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={14 * unit}
              fill="transparent"
            />
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={(isActive(place) ? 9 : 6.5) * unit}
              className="fill-signal transition-all"
            />
          </g>
        ))}
        <g {...highlight(home.name)} className="cursor-pointer">
          <circle
            cx={toX(home.lon)}
            cy={toY(home.lat)}
            r={14 * unit}
            fill="transparent"
          />
          <circle
            cx={toX(home.lon)}
            cy={toY(home.lat)}
            r={(active === home.name ? 9 : 6.5) * unit}
            className="fill-paper transition-all"
          />
        </g>
      </svg>
      {labelled.map((place) => (
        <span
          key={place.name}
          className={`pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap rounded bg-panel/80 px-1 font-mono text-xs ${
            isActive(place) ? "text-signal" : "text-paper"
          } ${labelled.length > 1 && place === lowest ? "" : "-translate-y-full"}`}
          style={{
            left: left(place),
            top: `calc(${top(place)} ${labelled.length > 1 && place === lowest ? "+" : "-"} 8px)`,
          }}
        >
          {place.name}
        </span>
      ))}
      {activePlace && !focus && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded border border-line bg-ink px-2 py-1 font-mono text-xs text-paper"
          style={{
            left: left(activePlace),
            top: `calc(${top(activePlace)} - 10px)`,
          }}
        >
          {active}
        </div>
      )}
      {focus && (
        <button
          type="button"
          onClick={onReset}
          className="absolute right-0 top-0 z-20 rounded border border-line bg-ink px-2 py-1 font-mono text-xs text-mute transition-colors hover:text-signal"
        >
          ← World view
        </button>
      )}
    </div>
  );
}
