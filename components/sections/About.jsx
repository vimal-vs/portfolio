import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="max-w-2xl space-y-5 text-lg text-mute">
        <p className="text-2xl leading-snug text-paper">
          Back in 2019, I started by recreating popular web pages with just HTML
          and CSS. What began as simple curiosity quickly evolved into a passion.
        </p>
        <p>
          Today I&apos;m an engineer at Bajaj Finserv Health, where I took an
          internal observability tool from proof-of-concept to a platform used
          across 14+ teams, and shipped conversational systems for live
          healthcare workflows. I care about the unglamorous parts that make
          software trustworthy: validation gates, audit trails, clean data and
          fast root-cause analysis.
        </p>
        <p>
          When I&apos;m not lost in a codebase, you&apos;ll probably find me
          gazing at the stars, jamming on my
          <span className="text-paper cursorGuitar hover:text-signal transition-colors">
            {" guitar"}
          </span>
          , planning my next country, or cherishing moments with my loved ones
          in the little pockets of time that make life special.
        </p>
      </Reveal>
    </Section>
  );
}
