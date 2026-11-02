import { FiArrowUpRight } from "react-icons/fi";
import experiences from "../../data/experience.json";
import CareerTrace from "../ui/CareerTrace";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <CareerTrace experiences={experiences} />
      <div className="space-y-14">
        {experiences.map((exp) => (
          <Reveal key={exp.id}>
            <article id={exp.id} className="scroll-mt-24">
              <p className="font-mono text-xs text-faint">{exp.duration}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-paper">{exp.role}</h3>
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-1 inline-flex items-center gap-1 text-mute transition-colors hover:text-signal"
              >
                {exp.company}
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <FiArrowUpRight />
                </span>
              </a>
              <ul className="mt-6 grid gap-x-8 gap-y-6 lg:grid-cols-2">
                {exp.highlights.map((highlight) => (
                  <li key={highlight.title} className="border-l border-line pl-4">
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium text-paper">
                      {highlight.title}
                      {highlight.badge && (
                        <span className="rounded-full border border-signal/40 px-2 py-0.5 font-mono text-[11px] font-normal text-signal">
                          {highlight.badge}
                        </span>
                      )}
                    </p>
                    {highlight.what && <p className="mt-0.5 font-mono text-xs text-faint">{highlight.what}</p>}
                    <p className="mt-1.5 text-sm leading-relaxed text-mute">{highlight.text}</p>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <li key={skill} className="rounded border border-line px-2 py-1 font-mono text-xs text-mute">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
