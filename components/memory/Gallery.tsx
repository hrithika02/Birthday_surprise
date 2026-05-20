"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
];

export default function Gallery() {
    return (
        <section className="mt-32">

            <div className="mb-16 text-center">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d6c2a1]">
                    Fragments
                </p>

                <h2 className="text-4xl font-light md:text-6xl">
                    Moments preserved softly.
                </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: index * 0.1,
                        }}
                        whileHover={{
                            y: -8,
                        }}
                        className="group relative overflow-hidden rounded-[32px]"
                    >

                        {/* Image */}
                        <div className="relative aspect-[3/4] overflow-hidden">

                            <Image
                                src={image}
                                alt="Memory"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                        {/* Glass Reflection */}
                        <div className="absolute inset-0 bg-white/[0.03] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    </motion.div>
                ))}

            </div>

        </section>
    );
}