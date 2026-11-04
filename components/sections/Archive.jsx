import { BsArrowLeftShort } from "react-icons/bs";
import projects from '../../data/archive.json'

const linkClass = "text-mute transition-colors hover:text-signal";

export default function Archive() {
  return (
    <div className='mx-auto max-w-5xl px-6 py-12 md:px-10 lg:py-24'>
      <a href="/" className='group mb-4 flex w-max items-center font-mono text-sm text-signal'>
        <span className='mr-1 text-2xl transition-transform group-hover:-translate-x-1'><BsArrowLeftShort /></span>Vimal Sakkthi</a>
      <h1 className='text-5xl font-semibold tracking-tighter text-paper sm:text-7xl'>
        All Projects
      </h1>
      <table className='mt-12 w-full border-collapse text-left'>
        <thead className="sticky top-0 z-10 border-b border-line bg-ink/80 backdrop-blur">
          <tr className="font-mono text-xs font-normal text-faint">
            <th className="py-4 pr-6 font-normal">Year</th>
            <th className="py-4 pr-6 font-normal">Project</th>
            <th className="hidden py-4 pr-6 font-normal md:table-cell">Built with</th>
            <th className="py-4 font-normal">Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => {
            return (
              <tr className="border-b border-line last:border-none" key={project.title}>
                <td className="py-4 pr-6 align-top font-mono text-xs text-faint">
                  <div className="translate-y-1">{project.year}</div>
                </td>
                <td className="py-4 pr-6 align-top font-medium leading-snug text-paper">
                  {project.title}
                </td>
                <td className="hidden py-4 pr-6 align-top md:table-cell">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-mute">
                    {project.technology.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                </td>
                <td className="py-4 align-top text-sm">
                  <div className="flex gap-4">
                    {project.link && <a href={project.link} target="_blank" rel="noreferrer" className={linkClass}>Demo</a>}
                    <a href={project.gitlink} target="_blank" rel="noreferrer" className={linkClass}>Github</a>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
