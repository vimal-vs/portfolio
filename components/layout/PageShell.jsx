"use client"

import { MotionConfig } from "framer-motion"
import Header from "./Header"
import Footer from "./Footer"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Credentials from "../sections/Credentials"
import Travel from "../sections/Travel"
import Contact from "../sections/Contact"

export default function PageShell() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="relative z-10 min-h-screen">
                <Header />
                <div className="mx-auto max-w-6xl px-6 md:px-10">
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Credentials />
                        <Travel />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </div>
        </MotionConfig>
    )
}
