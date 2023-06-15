import { BsArrowRightShort } from "react-icons/bs";

export default function Contact(){
    return ( 
        <section id="contact" className="mt-2 lg:mt-40 lg:scroll-mt-24 text-slate-400 text-xl">
            <p>Let&apos;s connect via <a href="mailto:vimalsakkthi@gmail.com" className="text-slate-200 hover:text-teal-300">mail</a>, or send me a message.</p>
            <div className="mt-80">
            </div>
            <div className="group flex gap-1 mt-8 xl:mt-20 hover:underline decoration-teal-400 underline-offset-4 transition-all text-lg">
                <a className="text-slate-200" href="/resume">View Full Résumé</a>
                <span className='mt-1 group-hover:translate-x-2 transition-all'>
                    <BsArrowRightShort />
                </span>
            </div>
        </section>
    )
}