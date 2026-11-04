import credentials from "../../data/credentials.json";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Credentials() {
  return (
    <Section id="credentials" index="05" title="Credentials">
      <div className="space-y-12">
        {credentials.map((credential) => (
          <Reveal key={credential.group}>
            <h3 className="font-mono text-xs text-faint">{credential.group}</h3>
            <ul className="mt-3 divide-y divide-line border-t border-line">
              {credential.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-8">
                  <div>
                    <p className="text-paper">{item.title}</p>
                    {item.detail && <p className="mt-1 text-sm text-mute">{item.detail}</p>}
                  </div>
                  {item.date && <p className="shrink-0 font-mono text-xs text-faint sm:pt-1">{item.date}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
