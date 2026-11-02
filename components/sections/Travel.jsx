import { useState } from "react";
import travel from "../../data/travel.json";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import WorldMap from "../ui/WorldMap";

const { explored, upcoming } = travel;
const countriesExplored = new Set(explored.map((place) => place.country)).size;

export default function Travel() {
  const [active, setActive] = useState(null);

  const highlight = (name) => ({
    onMouseEnter: () => setActive(name),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(name),
    onBlur: () => setActive(null),
    onClick: () => setActive(name),
  });

  const placeButton = (place, isExplored) => (
    <li key={place.name}>
      <button
        type="button"
        {...highlight(place.name)}
        className={`flex items-center gap-2.5 text-left transition-colors hover:text-signal ${
          active === place.name ? "text-signal" : "text-paper"
        }`}
      >
        <span
          className={`h-2 w-2 shrink-0 rounded-full border border-signal ${isExplored ? "bg-signal" : ""}`}
        />
        {place.name}
        {place.country && <span className="font-mono text-xs text-faint">{place.country} · {place.date}</span>}
      </button>
    </li>
  );

  return (
    <Section id="wanderlust" index="06" title="Wanderlust">
      <Reveal>
        <p className="max-w-2xl text-2xl leading-snug text-paper">
          The world is wide. I intend to see almost half of it.
        </p>
        <p className="mt-3 max-w-2xl text-lg text-mute">
          Malaysia came first, with Kuala Lumpur and Langkawi in August 2026, and
          there will be at least one new country every year from here on.
        </p>
      </Reveal>
      <Reveal className="mt-10 rounded-lg border border-line bg-panel p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between font-mono text-xs text-faint">
          <span>regions.map</span>
          <span>{countriesExplored} explored · {upcoming.length} upcoming</span>
        </div>
        <WorldMap explored={explored} upcoming={upcoming} active={active} highlight={highlight} />
        <div className="mt-6 grid gap-6 border-t border-line pt-5 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs text-faint">Explored</h3>
            <ul className="mt-3 space-y-2">{explored.map((place) => placeButton(place, true))}</ul>
          </div>
          <div>
            <h3 className="font-mono text-xs text-faint">Upcoming</h3>
            <ul className="mt-3 space-y-2">{upcoming.map((place) => placeButton(place, false))}</ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
