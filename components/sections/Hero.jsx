import { motion } from "framer-motion";
import stats from "../../data/stats.json";
import Socials from "../ui/Socials";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <div className="relative">
      <div aria-hidden className="heroGrid pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08 }}
        className="pb-16 pt-20 md:pb-24 md:pt-32"
      >
        <motion.p variants={rise} className="flex items-center gap-3 font-mono text-xs text-mute sm:text-sm">
          <span className="liveDot h-2 w-2 shrink-0 rounded-full bg-signal" />
          Associate Software Engineer · Bajaj Finserv Health
        </motion.p>
        <motion.h1
          variants={rise}
          className="mt-6 text-6xl font-semibold leading-none tracking-tighter text-paper sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Vimal Sakkthi
        </motion.h1>
        <motion.p variants={rise} className="mt-8 max-w-2xl text-xl leading-snug text-mute md:text-2xl">
          I build <span className="text-paper">observability platforms</span>,{" "}
          <span className="text-paper">conversational AI</span> and the cloud systems that keep live healthcare
          workflows running.
        </motion.p>
        <motion.div variants={rise}>
          <Socials />
        </motion.div>
        <motion.dl
          variants={rise}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 bg-ink p-5">
              <dt className="order-2 text-sm leading-snug text-mute">{stat.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-paper md:text-4xl">
                {stat.prefix && <span className="mr-1.5 font-mono text-xs font-normal text-faint">{stat.prefix}</span>}
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </div>
  );
}
