import projects from '../projectsData.json'
import Image from 'next/image'
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
    const gitLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <section id="projects" className="lg:pb-24 lg:scroll-mt-24">
            <div id="projects-section">
                {
                    projects.map(project => {
                        return (
                            <div key={project.id} id='project' onClick={(e) => e.stopPropagation()} className="group flex flex-col gap-6 mb-8 md:mb-0 md:mt-6 py-2 md:flex-row md:gap-12 md:p-4 hover:text-teal-300 focus-visible:text-teal-300 hover:bg-slate-500 hover:bg-opacity-10 transition-all rounded-md">
                                <div className='mt-2'>
                                    <a className="text-lg" href={project.link} target="_blank"><Image src={project.picture} priority width="300" height="100" alt="project-demo-image" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30' /> </a>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-1.5'>
                                            <a className="text-lg" href={project.link} target="_blank">{project.title} </a>
                                            <span className='mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300 transition-all'><FiArrowUpRight /></span>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 mt-1.5 md:mt-3 lg:leading-normal">{project.description}</p>
                                    <div className='flex justify-between'>
                                        <ul className="flex flex-wrap">
                                            {project.technology.map(tech => {
                                                return (
                                                    <li className="mt-2 mr-2 md:mt-1.5" key={tech}>
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300">{tech}</div>
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                        <div className='relative flex gap-2 pt-1.5 pl-2.5 md:flex-row-reverse md:pt-0 md:pl-4' key={project.gitlink}>
                                            <a title={`Github : ${project.title}`} href={project.gitlink} target='_blank' className='absolute top-3 right-3 md:right-0 text-lg opacity-70 peer-hover:opacity-100 '><AiOutlineGithub /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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