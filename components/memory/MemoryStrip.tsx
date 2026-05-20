"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const memories = [
    {
        title: "Quiet Evenings",
        date: "17 May 2023",
        image: "/images/1.jpg",
    },
    {
        title: "Little Talks",
        date: "02 Aug 2023",
        image: "/images/2.jpg",
    },
    {
        title: "Unplanned Days",
        date: "21 Oct 2023",
        image: "/images/3.jpg",
    },
    {
        title: "Simple Joys",
        date: "11 Jan 2024",
        image: "/images/4.jpg",
    },
];

export default function MemoryStrip() {
    return (
        <section className="relative -mt-10 w-full max-w-5xl">

            {/* TITLE */}
            <div className="mb-5 flex items-center gap-3 px-1">

                <h2 className="font-[family:var(--font-cormorant)] text-[30px] text-[#2f2724]">

                    Moments We’ll Always Keep

                </h2>

                <div className="h-[5px] w-[5px] rounded-full bg-[#f2d0ba]" />

            </div>

            {/* MEMORY GRID */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {memories.map((memory, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: "easeOut",
                        }}
                        className="group relative overflow-hidden rounded-[26px] border border-white/20 bg-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl"
                    >

                        {/* IMAGE */}
                        <div className="relative aspect-[16/10] overflow-hidden">

                            <Image
                                src={memory.image}
                                alt={memory.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                            {/* WARM CINEMATIC LIGHT */}
                            <div className="absolute inset-0 bg-[#f4d8c8]/10 mix-blend-screen" />

                        </div>

                        {/* TEXT */}
                        <div className="absolute bottom-0 left-0 z-10 p-4">

                            <h3 className="font-[family:var(--font-cormorant)] text-[18px] leading-none text-white md:text-[22px]">

                                {memory.title}

                            </h3>

                            <p className="mt-2 text-xs tracking-wide text-white/70 md:text-sm">

                                {memory.date}

                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}