"use client";

import { motion } from "framer-motion";

export default function FinalMessage() {
    return (
        <div className="flex flex-col items-center justify-center text-center select-none mt-6">
            
            {/* CONTENT CONTAINER */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >
                {/* SERIF MAIN TEXT (Cream Color with Soft Bloom) */}
                <h2
                    className="
                        font-[family:var(--font-cormorant)]
                        text-4xl
                        font-normal
                        tracking-wide
                        text-[#FFF8F2]
                        md:text-5xl
                    "
                    style={{
                        textShadow: "0 0 10px rgba(255, 248, 242, 0.35), 0 0 20px rgba(255, 248, 242, 0.15)"
                    }}
                >
                    Thank you for being
                </h2>

                {/* HANDWRITTEN TEXT (Warm Cream Color with Richer Glow) */}
                <p
                    className="
                        -mt-1
                        font-[family:var(--font-dancing)]
                        text-3xl
                        text-[#FCECDD]
                        md:text-4xl
                        font-light
                    "
                    style={{
                        textShadow: "0 0 15px rgba(252, 236, 221, 0.5), 0 0 30px rgba(252, 236, 221, 0.2)"
                    }}
                >
                    exactly you.
                </p>

                {/* HIGH-INTENSITY GLOW LINE */}
                <div className="relative mt-5 h-[1.5px] w-48 flex items-center justify-center">
                    {/* Base gradient line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCECDD]/60 to-transparent" />
                    
                    {/* Intense center flare core */}
                    <div className="absolute h-[2px] w-12 bg-white blur-[0.5px] opacity-95 shadow-[0_0_8px_#FCECDD,0_0_15px_#FCECDD]" />
                    
                    {/* Outer wide glow aura */}
                    <div className="absolute h-[6px] w-24 bg-[#FCECDD]/30 blur-[3px]" />
                </div>

            </motion.div>
        </div>
    );
}