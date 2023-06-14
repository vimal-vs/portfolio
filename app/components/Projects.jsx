import projects from '../projectsData.json'
import Image from 'next/image'

export default function Projects(){
    return (
        <div id='projects' className="mt-24 scroll-mt-24">
            <section id="projects-section" className='pages'>
                {
                    projects.map(project => {
                        return(
                            <a id='project' key={ project.id } href="#" className="flex gap-14 mt-6 p-4 hover:text-teal-300 focus-visible:text-teal-300 hover:bg-slate-500 hover:bg-opacity-10 transition-all rounded-md">
                                <div className="w-3/4 mt-2">
                                <Image src="/project-image.jpg" width="200" height="100" alt="project-demo-image" />
                                </div>
                                <div>
                                    <h3 className="text-lg">{ project.title }
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                    </h3>
                                    <p className="text-slate-400 mt-3 leading-5">{ project.description }</p>
                                </div>
                            </a>
                        )
                    })
                }
            </section>
        </div>
    )
}