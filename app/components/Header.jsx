import Nav from "./Nav"
import Socials from "./Socials"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Skills from "./Skills"

export default function Header() {
    return (
        <div className="flex my-12 mx-4 lg:m-auto w-4/5 2xl:w-2/3">
            <div className="flex flex-col lg:flex-row lg:items-start lg:py-24 2xl:px-16 lg:gap-24">
                <div className="lg:sticky lg:top-24 lg:p-2 text-slate-200">
                    <a href="/" className="text-5xl font-semibold">Vimal Sakkthi</a>
                    <h3 className="mt-2 xl:text-xl">Student • Web Developer</h3>
                    <p className="mt-5 2xl:text-lg text-slate-400">I build accessible, inclusive products and digital experiences for the web.</p>
                    <div className="hidden lg:block">
                        <Nav />
                    </div>
                    <Socials />
                </div>
                <section id="about" className="mt-16 lg:mt-0 lg:sticky lg:w-2/3 xl:w-3/4 lg:p-2 lg:scroll-mt-24">
                    <div>
                        <div className="lg:hidden mb-4 uppercase font-semibold">About</div>
                        <About />
                    </div>
                    <div>
                        <div className="lg:hidden mt-16 uppercase font-semibold">Projects</div>
                        <Projects />
                    </div>
                    <div>
                    {/* <div className="mt-24 lg:mt-0">
                        <Skills />
                    </div> */}
                        <div className="lg:hidden mt-16 mb-4 uppercase font-semibold">Contact</div>
                        <Contact />
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <Footer />
                    </div>
                </section>
            </div>
        </div>
    )
}