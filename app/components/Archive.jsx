import { BsArrowLeftShort } from "react-icons/bs";
import projects from '../archiveData.json'

export default function Archive() {
    return (
      <div className='py-12 lg:py-24 mx-auto w-3/4 md:w-2/3'>
        <a href="/" className='group mb-2 flex items-center font-semibold leading-tight text-teal-300 text-lg transition-all w-max'>
          <span className='mr-1 group-hover:-translate-x-1 text-teal-300 transition-all text-2xl'><BsArrowLeftShort /></span>Vimal Sakkthi</a>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl z-10'>
          All Projects
        </h1>
        <table className='mt-12 w-full border-collapse text-left'>
          <thead className="sticky top-0 z-10 border-b border-slate-600/10 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="hidden py-4 pr-6 text-sm font-semibold text-slate-200 md:table-cell">Built with</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Link</th>
            </tr>
          </thead>
          <tbody>
            { projects.map(project => {
                return(
                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">{ project.year }</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>
                          <div className="text-sm md:text-base">{ project.title }</div>
                      </div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top md:table-cell">
                      <ul className="-translate-y-1.5 md:flex flex-wrap">
                      { project.technology.map(tech => {
                          return (
                            <li className="my-1 mr-1.5">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{ tech }</div>
                            </li>
                          )}
                      )}
                      </ul>
                    </td>
                    <td className="text-sm py-4 align-top"><a href={ project.link } className="hover:text-teal-300 hover:font-semibold">Demo</a></td>
                    <td className="text-sm py-4 align-top"><a href={ project.gitlink } className="hover:text-teal-300 hover:font-semibold">Github</a></td>
                  </tr>
                )}
            )}
          </tbody>
        </table>
      </div>
    )
}