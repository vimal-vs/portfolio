"use client"

import Nav from "./Nav"
import Socials from "./Socials"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Skills from "./Skills"

export default function Header() {

    const sections = document.querySelectorAll("section[id]");
    var sectionId = "about";
    window.addEventListener("scroll", navHighlighter);

    if (document.querySelector("nav span") && document.querySelector("nav div")){
        document.querySelector("nav span").classList.add("activeSpan");
        document.querySelector("nav div").classList.add("activeText");
    }

    function navHighlighter() {

    let scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-150;
        sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector("nav a[href*=" + sectionId + "] span").classList.add("activeSpan");
            document.querySelector("nav a[href*=" + sectionId + "] div").classList.add("activeText");
        } 
        else {
            document.querySelector("nav a[href*=" + sectionId + "] span").classList.remove("activeSpan");
            document.querySelector("nav a[href*=" + sectionId + "] div").classList.remove("activeText");
        }
    });
    }

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
                    <a href="/" className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Vimal Sakkthi</a>
                    <h3 className="mt-2 xl:text-xl">Student • Web Developer</h3>
                    <p className="mt-5 2xl:text-lg text-slate-400 w-1/2">I build accessible, inclusive products and digital experiences for the web.</p>
                    <div className="hidden lg:block">
                        <Nav />
                    </div>
                    <Socials />
                </div>
                <div className="sticky lg:w-1/2">
                    <div>
                        <div className="lg:hidden mb-4 uppercase font-semibold">About</div>
                        <About />
                    </div>
                    <div>
                        <div className="lg:hidden mt-16 uppercase font-semibold">Projects</div>
                        <Projects />
                    </div>
                    <div>
                    <div className="mt-24 lg:mt-0">
                        <Skills />
                    </div> 
                        <div className="lg:hidden mt-16 mb-4 uppercase font-semibold">Contact</div>
                        <Contact />
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}