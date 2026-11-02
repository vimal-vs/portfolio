import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavElements from "../../data/nav.json";

export default function Header() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NavElements.forEach((element) => {
      const section = document.getElementById(element.navID);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="/" className="font-mono text-sm font-medium tracking-tight text-paper">
          vimal<span className="text-signal">.</span>vs
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NavElements.map((element) => (
            <a
              key={element.id}
              href={element.href}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === element.navID ? "text-ink" : "text-mute hover:text-paper"
              }`}
            >
              {active === element.navID && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 rounded-full bg-signal"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{element.title}</span>
            </a>
          ))}
        </nav>
        <a
          href="/resume"
          className="rounded-full border border-line px-3.5 py-1.5 text-sm text-paper transition-colors hover:border-signal hover:text-signal"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
