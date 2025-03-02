export default function About() {
  return (
    <section
      id="about"
      className="mt-6 lg:mt-0 lg:py-24 lg:scroll-mt-24 text-justify md:text-start"
    >
      <div className="text-lg text-slate-400">
        <p>
          Back in 2019, I started by recreating popular web pages with just HTML
          and CSS, diving headfirst into the world of web development with
          complete interest. What began as simple curiosity quickly evolved into
          a passion.
        </p>
      </div>
      <div className="mt-4 text-lg text-slate-400">
        <p>
          Over the years, I&apos;ve explored various aspects of development,
          from crafting seamless user experiences to designing efficient backend
          systems and infrastructure. I focus on solving complex problems,
          optimizing performance, and ensuring that applications are built with
          scalability and reliability in mind.
        </p>
      </div>
      <div className="mt-4 text-lg text-slate-400">
        <p>
          When I&apos;m not lost in codebase, you&apos;ll probably find me
          gazing at the stars, jamming on my
          <span className="text-slate-300 cursorGuitar hover:text-orange-300 transition-all">
            {" guitar"}
          </span>
          , or cherishing moments with my loved ones in the little pockets of
          time that make life special.
        </p>
      </div>
    </section>
  );
}
