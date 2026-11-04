import { BsArrowRightShort } from "react-icons/bs";
import Reveal from "../ui/Reveal";
import Socials from "../ui/Socials";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line py-20 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-mute">Let&apos;s connect</p>
        <a
          href="mailto:vimalsakkthi@gmail.com"
          className="mt-5 block break-words text-3xl font-semibold tracking-tighter text-paper transition-colors hover:text-signal sm:text-5xl lg:text-7xl"
        >
          vimalsakkthi@gmail.com
        </a>
        <Socials />
        <a href="/resume" className="group mt-8 inline-flex items-center gap-1 text-paper transition-colors hover:text-signal">
          View Full Résumé
          <span className="text-xl transition-transform group-hover:translate-x-1"><BsArrowRightShort /></span>
        </a>
      </Reveal>
    </section>
  );
}
