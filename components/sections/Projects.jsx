import projects from '../../data/projects.json'
import Image from 'next/image'
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.08}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel transition-colors hover:border-mute/50">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <Image
                  src={project.picture}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  alt={`${project.title} screenshot`}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-paper">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition-colors after:absolute after:inset-0 group-hover:text-signal"
                    >
                      {project.title}
                      <FiArrowUpRight className="shrink-0" />
                    </a>
                  </h3>
                  <a
                    title={`Github : ${project.title}`}
                    aria-label={`Github : ${project.title}`}
                    href={project.gitlink}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 text-xl text-mute transition-colors hover:text-signal"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-faint">
                  {project.technology.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <a href="/archive" className="group mt-10 inline-flex items-center gap-1 text-paper transition-colors hover:text-signal">
        View Full Project Archive
        <span className="text-xl transition-transform group-hover:translate-x-1"><BsArrowRightShort /></span>
      </a>
    </Section>
  )
}
