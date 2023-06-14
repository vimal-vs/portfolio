import Nav from "./Nav"
import Socials from "./Socials"
import Projects from "./Projects"
import About from "./About"

export default function Header() {
    return (
        <div className="flex flex-col m-auto w-2/3">
            <div className="flex items-start justify-between py-24 px-32 gap-24">
                <div className="sticky top-24 p-2 w-1/2 text-slate-200">
                    <a href="/" className="text-5xl font-semibold">Vimal Sakkthi</a>
                    <h3 className="mt-2 text-xl">Student • Web Developer</h3>
                    <p className="mt-5 text-lg text-slate-400">I build accessible, inclusive products and digital experiences for the web.</p>
                    <Nav />
                    <Socials />
                </div>
                <section id="about" className="sticky w-3/4 p-2 scroll-mt-24">
                    <About />
                    <Projects />
                </section>
            </div>
        </div>
    )
}