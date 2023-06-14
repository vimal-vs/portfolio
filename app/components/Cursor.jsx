import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor(){
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            }); 
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 197.5,
            y: mousePosition.y - 197.5
        }
    }

    return (
        <motion.div 
            className="bg-blue-700 brightness-75 rounded-full blur-3xl shadow-2xl shadow-blue-700 opacity-10 h-96 w-96 fixed top-0 left-0"
            variants={ variants }
            animate="default"
            transition={{ duration: 0 }}
        />
    )
}