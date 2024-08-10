import Contact from "./Contact";

export default function Skills() {
    return (
        <section id="skills" className="lg:pb-12 lg:scroll-mt-24 text-lg text-slate-400">
            <div className="flex flex-col gap-1 mt-4">
                <h4 className="text-slate-300">Programming Languages :</h4>
                <div className="flex mt-4 ml-4">
                    <ul className="flex flex-col gap-4 list-disc w-1/3">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                    <ul className="flex flex-col ml-20 gap-4 list-disc">
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-8">
                <h4 className="text-slate-300">Libraries & Frameworks :</h4>
                <div className="flex mt-4 ml-4">
                    <ul className="flex flex-col gap-4 list-disc w-1/3">
                        <li>Next.Js</li>
                        <li>React.Js</li>
                        <li>Tailwind</li>
                    </ul>
                    <ul className="flex flex-col ml-20 gap-4 list-disc">
                        <li>Express.Js</li>
                        <li>Sequelize/Prisma</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-8">
                <h4 className="text-slate-300">Tools & Platforms :</h4>
                <div className="flex mt-4 ml-4">
                    <ul className="flex flex-col gap-4 list-disc w-1/3">
                        <li>Google Cloud (GCP)</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                    <ul className="flex flex-col ml-20 gap-4 list-disc">
                        <li>Terraform</li>
                        <li>Jenkins</li>
                    </ul>
                </div>
            </div>
            <Contact />
        </section>
    )
}
