import worldDots from "../../data/worldDots.json";

const toX = (lon) => (lon + 180) * worldDots.scale;
const toY = (lat) => (worldDots.top - lat) * worldDots.scale;

export default function WorldMap({ explored, upcoming, active, highlight }) {
  const activePlace = [...explored, ...upcoming].find((place) => place.name === active);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${worldDots.width} ${worldDots.height}`}
        role="img"
        aria-label={`World map marking ${explored.map((place) => place.name).join(" and ")} as explored, and ${upcoming.map((place) => place.name).join(", ")} as upcoming.`}
        className="block h-auto w-full"
      >
        <path d={worldDots.path} className="stroke-mute/40" strokeWidth="4" strokeLinecap="round" fill="none" />
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
              r={active === place.name ? 9 : 6.5}
              className="fill-signal transition-all"
            />
          </g>
        ))}
      </svg>
      {activePlace && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded border border-line bg-ink px-2 py-1 font-mono text-xs text-paper"
          style={{
            left: `${(toX(activePlace.lon) / worldDots.width) * 100}%`,
            top: `calc(${(toY(activePlace.lat) / worldDots.height) * 100}% - 10px)`,
          }}
        >
          {activePlace.name}
        </div>
      )}
    </div>
  );
}
