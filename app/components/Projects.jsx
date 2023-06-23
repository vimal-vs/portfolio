import projects from '../projectsData.json'
import Image from 'next/image'
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects(){
    return (
        <section id="projects" className="lg:mt-2 lg:scroll-mt-24">
            <div id="projects-section">
                {
                    projects.map(project => {
                        return(
                            <a id='project' key={ project.id } href={ project.link } className="group flex flex-col gap-6 mt-6 p-2 lg:flex-row lg:gap-12 lg:p-4 hover:text-teal-300 focus-visible:text-teal-300 hover:bg-slate-500 hover:bg-opacity-10 transition-all rounded-md">
                                <div className="lg:mt-2">
                                    <Image src={ project.picture } width="600" height="200" alt="project-demo-image" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30' />
                                </div>
                                <div>
                                    <div className='flex gap-1.5'>
                                        <h3 className="text-lg">{ project.title } </h3>
                                        <span className='mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'><FiArrowUpRight /></span>
                                    </div>
                                    <p className="text-slate-400 mt-3 lg:leading-normal">{ project.description }</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="group flex gap-1 mt-12 hover:underline decoration-teal-400 underline-offset-4 transition-all text-lg w-fit">
                <a href="/archive">View Full Project Archive</a>
                <span className='mt-1 group-hover:translate-x-2 transition-all'><BsArrowRightShort /></span>
            </div>
        </section>
    )
}