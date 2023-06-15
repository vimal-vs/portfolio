import projects from '../projectsData.json'
import Image from 'next/image'
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects(){
    return (
        <section id="projects" className="lg:mt-24 lg:scroll-mt-24">
            <div id="projects-section">
                {
                    projects.map(project => {
                        return(
                            <a id='project' key={ project.id } href="#" className="group flex flex-col-reverse gap-6 mt-6 lg:flex-row lg:mt-6 lg:gap-14 lg:p-4 hover:text-teal-300 focus-visible:text-teal-300 hover:bg-slate-500 hover:bg-opacity-10 transition-all rounded-md">
                                <div className="lg:w-3/4 lg:mt-2">
                                    <Image src="/project-image.jpg" width="200" height="100" alt="project-demo-image" />
                                </div>
                                <div>
                                    <div className='flex gap-1.5'>
                                        <h3 className="text-lg">{ project.title } </h3>
                                        <span className='mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'><FiArrowUpRight /></span>
                                    </div>
                                    <p className="text-slate-400 mt-3 lg:leading-5">{ project.description }</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="group flex gap-1 mt-12 hover:underline decoration-teal-400 underline-offset-4 transition-all text-lg">
                    <a href="/archive">View Full Project Archive</a>
                    <span className='mt-1 group-hover:translate-x-2 transition-all'><BsArrowRightShort /></span>
            </div>
        </section>
    )
}