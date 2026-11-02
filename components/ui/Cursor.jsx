import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SIZE = 560;

export default function Cursor() {
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 300, damping: 40 });
  const springY = useSpring(y, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const mouseMove = (e) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full"
      style={{
        x: springX,
        y: springY,
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, rgb(196 240 66 / 0.07), transparent 65%)",
      }}
    />
  );
}
