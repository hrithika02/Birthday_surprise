"use client";

import { motion } from "framer-motion";

type MemoryCardProps = {
    title: string;
    description: string;
};

export default function MemoryCard({
    title,
    description,
}: MemoryCardProps) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
            whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: -2,
            }}
            transition={{
                duration: 0.4,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
        >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d6c2a1]/5 to-[#c7a6a1]/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10">

                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#d6c2a1]">
                    Memory
                </p>

                <h3 className="text-3xl font-light">
                    {title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                    {description}
                </p>

            </div>
        </motion.div>
    );
}