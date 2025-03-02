import { FiArrowUpRight } from "react-icons/fi";

const experiences = [
  {
    company: "Bajaj Finserv Health",
    role: "SDE Intern",
    duration: "OCT'24 — PRESENT",
    link: "https://bajajfinservhealth.in",
    description:
      "Engineered a Listing microservice, optimized API gateway caching, and implemented data sync with advanced error monitoring.",
    skills: ["SpringBoot", "MySQL", "Azure", "ELK"],
  },
  {
    company: "TechHive",
    role: "Full Stack Intern",
    duration: "AUG'23 — AUG'24",
    link: "https://techhivetechnology.com",
    description:
      "Built an interactive admin dashboard to streamline driver and customer operations with user, fleet and route management .",
    skills: ["React", "Tailwind", "Express", "PostgeSQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="lg:mt-2 lg:pb-24 lg:scroll-mt-24 space-y-10"
    >
      {experiences.map((exp, index) => (
        <a
          key={index}
          href={exp.link}
          target="_blank"
          className="group flex flex-col lg:flex-row lg:justify-between lg:items-start pt-4 lg:p-4 hover:text-teal-300 focus-visible:text-teal-300 hover:bg-slate-500 hover:bg-opacity-10 transition-all rounded-md"
        >
          <div className="w-1/3 mt-1">
            <h3 className="tracking-wide text-slate-400 text-xs">
              {exp.duration}
            </h3>
          </div>
          <div className="flex flex-col gap-3 font-medium text-slate-200 lg:w-3/4">
            <div className="flex gap-2 items-center">
              <p className="text-lg group-hover:text-teal-300">
                {exp.role} · {exp.company}
              </p>
              <span className="mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300 transition-all">
                <FiArrowUpRight />
              </span>
            </div>
            <p className="text-slate-400 text-sm min-h-[40px]">
              {exp.description}
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              {exp.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 w-fit"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
