import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const AXIS_START = 2023 * 12 + 6;
const toMonths = ([year, month]) => year * 12 + month - 1;

const formatLength = (months) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years}y`, rest && `${rest}m`].filter(Boolean).join(" ");
};

export default function CareerTrace({ experiences }) {
  // Set after mount so the live span reflects today rather than the build date.
  const [now, setNow] = useState(null);
  useEffect(() => {
    const today = new Date();
    setNow(today.getFullYear() * 12 + today.getMonth());
  }, []);

  const current = now ?? toMonths([2026, 1]);
  const axisEnd = current + 2;
  const position = (months) => ((months - AXIS_START) / (axisEnd - AXIS_START)) * 100;

  const years = [];
  for (let year = 2024; year * 12 < axisEnd; year++) years.push(year);

  const spans = [...experiences].reverse();

  return (
    <Reveal className="mb-14 rounded-lg border border-line bg-panel p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between font-mono text-xs text-faint">
        <span>career.trace</span>
        <span>{spans.length} spans</span>
      </div>
      <div className="relative mb-2 ml-0 h-4 font-mono text-xs text-faint">
        {years.map((year) => (
          <span key={year} className="absolute -translate-x-1/2" style={{ left: `${position(year * 12)}%` }}>
            {year}
          </span>
        ))}
      </div>
      <div className="relative space-y-4">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {years.map((year) => (
            <span key={year} className="absolute inset-y-0 w-px bg-line/60" style={{ left: `${position(year * 12)}%` }} />
          ))}
        </div>
        {spans.map((exp, index) => {
          const isLive = !exp.end;
          const start = toMonths(exp.start);
          const end = isLive ? current + 1 : toMonths(exp.end) + 1;
          return (
            <a key={exp.id} href={`#${exp.id}`} className="group relative block">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="truncate text-paper transition-colors group-hover:text-signal">{exp.role}</span>
                <span className="shrink-0 font-mono text-xs text-faint">{formatLength(exp.months ?? end - start)}</span>
              </div>
              <div className="relative mt-1.5 h-2.5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-y-0 origin-left rounded-sm ${
                    isLive ? "bg-signal" : "bg-mute/50 transition-colors group-hover:bg-mute"
                  }`}
                  style={{ left: `${position(start)}%`, width: `${position(end) - position(start)}%` }}
                />
              </div>
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}
