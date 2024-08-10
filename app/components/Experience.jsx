import { FiArrowUpRight } from "react-icons/fi";

export default function Experience() {
    return (
        <section id="experience" className="lg:mt-2 lg:pb-24 lg:scroll-mt-24">
            <a href="https://techhivetechnology.com" target="_blank" className="group flex flex-col pt-4 lg:flex-row lg:p-4 hover:text-teal-300 focus-visible:text-teal-300 hover:bg-slate-500 hover:bg-opacity-10 transition-all rounded-md">
                <div className="w-1/2 mt-1">
                    <h3 className="tracking-wide text-slate-400 text-xs">AUG'23 — AUG'24</h3>
                </div>
                <div className="flex flex-col gap-3 font-medium text-slate-200">
                    <div className="flex gap-2">
                        <p className="text-lg group-hover:text-teal-300">Full Stack Developer Intern · TechHive</p>
                        <span className='mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300 transition-all'><FiArrowUpRight /></span>
                    </div>
                    <p className="leading-normal text-slate-400">Collaborated with designers and developers on multiple web projects to create full stack web applications for clients.</p>
                    <div className="flex gap-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 w-fit">React</div>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 w-fit">Tailwind</div>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 w-fit">SQL</div>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 w-fit">Figma</div>
                    </div>
                </div>
            </a>
        </section>
    )
}
