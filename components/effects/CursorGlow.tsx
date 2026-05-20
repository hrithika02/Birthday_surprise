"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        damping: 40,
        stiffness: 120,
    });

    const smoothY = useSpring(mouseY, {
        damping: 40,
        stiffness: 120,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 200);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none hidden md:block fixed z-0 h-[400px] w-[400px] rounded-full bg-[#d6c2a1]/10 blur-3xl"

            style={{
                x: smoothX,
                y: smoothY,
            }}
        />
    );
}