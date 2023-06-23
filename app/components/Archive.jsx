import { BsArrowLeftShort } from "react-icons/bs";

export default function Archive() {
    return (
      <div className='lg:py-24 mx-auto w-1/2'>
        <a href="/" className='group mb-2 flex items-center font-semibold leading-tight text-teal-300 text-lg transition-all'>
          <span className='mr-1 group-hover:-translate-x-1 '><BsArrowLeftShort /></span>Vimal Sakkthi</a>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl z-10'>
          All Projects
        </h1>
        <table className='mt-12 w-full border-collapse text-left'>
          <thead className="sticky top-0 z-10 border-b border-slate-600/10 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-300/10 last:border-none">
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">2022</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    <span>Harvard Business School Design System</span>
                  </div>
                    <div className="hidden sm:block">Harvard Business School Design System</div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Storybook</div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                  </li>
                  <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TypeScript</div>
                  </li>
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}