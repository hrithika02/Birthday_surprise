"use client";

import { motion } from "framer-motion";

const particles = [
    {
        size: 220,
        x: "15%",
        y: "20%",
        duration: 18,
    },
    {
        size: 160,
        x: "75%",
        y: "25%",
        duration: 14,
    },
    {
        size: 260,
        x: "60%",
        y: "70%",
        duration: 20,
    },
    {
        size: 120,
        x: "30%",
        y: "80%",
        duration: 16,
    },
];

export default function FloatingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden">

            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full bg-[#f8e7d3]/20 blur-3xl mix-blend-screen"

                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: particle.x,
                        top: particle.y,
                    }}

                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        opacity: [0.2, 0.45, 0.2],
                    }}

                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

        </div>
    );
}