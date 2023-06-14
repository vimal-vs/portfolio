import Nav from "./Nav"
import Socials from "./Socials"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Header() {
    return (
        <div className="flex my-12 mx-8 lg:m-auto lg:w-2/3">
            <div className="flex flex-col lg:flex-row lg:items-start lg:py-24 lg:px-32 lg:gap-24">
                <div className="lg:sticky lg:top-24 lg:p-2 lg:w-1/2 text-slate-200">
                    <a href="/" className="text-5xl font-semibold">Vimal Sakkthi</a>
                    <h3 className="mt-2 text-xl">Student • Web Developer</h3>
                    <p className="mt-5 text-lg text-slate-400">I build accessible, inclusive products and digital experiences for the web.</p>
                    <div className="hidden lg:block">
                        <Nav />
                    </div>
                    <Socials />
                </div>
                <section id="about" className="mt-16 lg:mt-0 lg:sticky lg:w-3/4 lg:p-2 lg:scroll-mt-24">
                    <div>
                        <div className="lg:hidden mb-4 uppercase font-semibold">About</div>
                        <About />
                    </div>
                    <div>
                        <div className="lg:hidden mt-16 uppercase font-semibold">Projects</div>
                        <Projects />
                    </div>
                    <div>
                        <div className="lg:hidden mt-16 mb-4 uppercase font-semibold">Contact</div>
                        <Contact />
                    </div>
                    <div className="mt-24 lg:mt-0">
                        <Footer />
                    </div>
                </section>
            </div>
        </div>
    )
}