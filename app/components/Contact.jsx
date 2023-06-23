import { BsArrowRightShort } from "react-icons/bs";

export default function Contact(){
    return ( 
        <div className="mt-12 lg:mt-24 lg:scroll-mt-24 text-slate-400 text-xl">
            <div className="group flex gap-1 text-lg w-fit">
                <a className="text-slate-200 w-max hover:underline decoration-teal-400 underline-offset-4 transition-all" href="/resume">View Full Résumé</a>
                <span className='mt-1 group-hover:translate-x-2 transition-all'>
                    <BsArrowRightShort />
                </span>
            </div>
            <div className="mt-8 md:mt-16">
                <p>Let&apos;s connect via <a href="mailto:vimalsakkthi@gmail.com" className="text-slate-200 hover:text-teal-300">mail</a>, or send me a message on linkedin.</p>
            </div>
        </div>
    )
}