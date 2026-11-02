export default function Section({ id, index, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-line py-16 md:py-24 md:grid md:grid-cols-[10rem_1fr] md:gap-10 lg:grid-cols-[14rem_1fr]"
    >
      <div className="mb-8 md:mb-0">
        <h2 className="flex gap-3 font-mono text-xs uppercase tracking-widest text-mute md:sticky md:top-24">
          <span className="text-signal">{index}</span>
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
