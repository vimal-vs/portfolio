export default function Skills(){
    return ( 
        <section id="skills" className="w-3/4 lg:mt-32 lg:scroll-mt-24 group mt-24 text-lg text-slate-400">
            {/* <h3 className="text-xl text-slate-200 group-hover:underline decoration-teal-400 underline-offset-4 transition-all font-medium">Technical Skills</h3> */}
            <div className="flex flex-col gap-1 mt-4">
                <h4 className="text-slate-300">Programming Languages :</h4>
                <p>C++, JavaScript, Python</p>
            </div>
            <div className="flex flex-col gap-1 mt-8">
                <h4 className="text-slate-300">Libraries & Frameworks :</h4>
                <p>Tailwind, React, Node.Js, Express.Js, Next.Js, Prisma, MongoDB, Postgres</p>
            </div>
            <div className="flex flex-col gap-1 mt-8">
                <h4 className="text-slate-300">Tools & Platforms :</h4>
                <p>Git, Github, Vercel, Figma, Firebase</p>
            </div>
            <p>View Full Résumé <span></span></p>
        </section>
    )
}