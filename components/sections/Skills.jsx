import skills from "../../data/skills.json";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <Reveal>
        <dl className="divide-y divide-line border-y border-line">
          {skills.map((skill) => (
            <div key={skill.group} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="pt-1 font-mono text-xs text-faint">{skill.group}</dt>
              <dd className="text-lg text-paper">{skill.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
