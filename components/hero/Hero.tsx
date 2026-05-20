"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingParticles from "@/components/effects/FloatingParticles";

export default function Hero() {
    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden px-5 sm:px-6 text-center">


            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/bg.png')",
                }}
            />

            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#1b1720]/30 via-[#15131a]/20 to-[#0f0f10]/60" />

            <div className="absolute bottom-0 left-0 h-[40vh] w-full bg-gradient-to-t from-[#f0d7c1]/10 to-transparent blur-3xl" />
            <FloatingParticles />
            {/* <div className="absolute left-6 top-6 z-20">
                <p className="text-lg text-[#e8d7c0] md:text-xl">
                    For You.
                </p>
            </div> */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                className="relative z-10 max-w-3xl"
                whileHover={{ rotateX: 2, rotateY: 2, }}
            >
                <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#d6c2a1]">
                    For Someone Special
                </p>

                <h1 className="hero-glow text-5xl font-light leading-[1.08] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                    Some people become memories
                    <span className="block italic text-[#c7a6a1]">
                        before time does.
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                    A small place built quietly for moments worth keeping forever.
                </p>

                <Link href="/memories">
                    <motion.button
                        whileHover={{
                            scale: 1.04,
                            y: -4,
                            boxShadow:
                                "0 0 60px rgba(214,194,161,0.18)",
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        className="mt-12 rounded-full border border-white/10 bg-white/[0.06] px-7 py-3.5 sm:px-8 sm:py-4 backdrop-blur-xl shadow-[0_0_40px_rgba(214,194,161,0.08)] transition-all duration-500 hover:bg-white/10 animate-pulse"
                    >
                        Open Memories
                    </motion.button>
                </Link>
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="mt-24 flex flex-col items-center text-white/40"
                >
                    <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
                        <div className="h-2 w-2 rounded-full bg-white/50" />
                    </div>

                    <p className="mt-3 text-xs tracking-[0.3em] uppercase">
                        Scroll
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}