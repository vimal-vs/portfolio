import worldDots from "../../data/worldDots.json";

const toX = (lon) => (lon + 180) * worldDots.scale;
const toY = (lat) => (worldDots.top - lat) * worldDots.scale;

const routePath = (from, to) => {
  const [x1, y1, x2, y2] = [toX(from.lon), toY(from.lat), toX(to.lon), toY(to.lat)];
  const lift = Math.hypot(x2 - x1, y2 - y1) * 0.35;
  return `M${x1} ${y1}Q${(x1 + x2) / 2} ${(y1 + y2) / 2 - lift} ${x2} ${y2}`;
};

export default function WorldMap({ home, explored, upcoming, active, highlight }) {
  // A country row in the list highlights every pin in that country.
  const isActive = (place) => place.name === active || place.country === active;
  const activePlace = [home, ...explored, ...upcoming].find(isActive);
  // One route per country, drawn to the first place visited there.
  const routes = explored.filter(
    (place, index) => explored.findIndex((other) => other.country === place.country) === index
  );

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${worldDots.width} ${worldDots.height}`}
        role="img"
        aria-label={`World map marking ${home.name} as home, ${explored.map((place) => place.name).join(" and ")} as explored, and ${upcoming.map((place) => place.name).join(", ")} as upcoming.`}
        className="block h-auto w-full"
      >
        <path d={worldDots.path} className="stroke-mute/40" strokeWidth="4" strokeLinecap="round" fill="none" />
        {routes.map((place) => (
          <path
            key={place.name}
            d={routePath(home, place)}
            className="stroke-signal/70"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
          />
        ))}
        {upcoming.map((place) => (
          <g key={place.name} {...highlight(place.name)}>
            <circle cx={toX(place.lon)} cy={toY(place.lat)} r="14" fill="transparent" />
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={active === place.name ? 9 : 6.5}
              className="fill-panel stroke-signal transition-all"
              strokeWidth="3"
            />
          </g>
        ))}
        {explored.map((place) => (
          <g key={place.name} {...highlight(place.name)}>
            <circle cx={toX(place.lon)} cy={toY(place.lat)} r="6.5" className="pinPulse fill-signal" />
            <circle cx={toX(place.lon)} cy={toY(place.lat)} r="14" fill="transparent" />
            <circle
              cx={toX(place.lon)}
              cy={toY(place.lat)}
              r={isActive(place) ? 9 : 6.5}
              className="fill-signal transition-all"
            />
          </g>
        ))}
        <g {...highlight(home.name)}>
          <circle cx={toX(home.lon)} cy={toY(home.lat)} r="14" fill="transparent" />
          <circle
            cx={toX(home.lon)}
            cy={toY(home.lat)}
            r={active === home.name ? 9 : 6.5}
            className="fill-paper transition-all"
          />
        </g>
      </svg>
      {activePlace && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded border border-line bg-ink px-2 py-1 font-mono text-xs text-paper"
          style={{
            left: `${(toX(activePlace.lon) / worldDots.width) * 100}%`,
            top: `calc(${(toY(activePlace.lat) / worldDots.height) * 100}% - 10px)`,
          }}
        >
          {active}
        </div>
      )}
    </div>
  );
}
