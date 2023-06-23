import Contact from "./Contact";

export default function Skills(){
    return ( 
        <section id="skills" className="mt-6 lg:mt-24 lg:scroll-mt-24 text-lg text-slate-400">
            <div className="flex flex-col gap-1 mt-4">
                <h4 className="text-slate-300">Programming Languages :</h4>
                <div className="flex mt-4 ml-4">
                    <ul className="flex flex-col gap-4 list-disc w-1/3">
                        <li>C++</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul className="flex flex-col ml-20 gap-4 list-disc">
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-8">
                <h4 className="text-slate-300">Libraries & Frameworks :</h4>
                <div className="flex mt-4 ml-4">
                    <ul className="flex flex-col gap-4 list-disc w-1/3">
                        <li>Tailwind</li>
                        <li>React</li>
                        <li>Node.Js</li>
                        <li>Express.Js</li>
                    </ul>
                    <ul className="flex flex-col ml-20 gap-4 list-disc">
                        <li>Next.Js</li>
                        <li>Prisma</li>
                        <li>MongoDB</li>
                        <li>Postgres</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-8">
                <h4 className="text-slate-300">Tools & Platforms :</h4>
                <div className="flex mt-4 ml-4">
                    <ul className="flex flex-col gap-4 list-disc w-1/3">
                        <li>Git</li>
                        <li>Netlify</li>
                        <li>Vercel</li>
                    </ul>
                    <ul className="flex flex-col ml-20 gap-4 list-disc">
                        <li>Figma</li>
                        <li>Firebase</li>
                    </ul>
                </div>
            </div>
            <Contact />
        </section>
    )
}