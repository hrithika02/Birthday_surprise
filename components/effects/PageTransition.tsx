"use client";

import { motion } from "framer-motion";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
            }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
            }}
            exit={{
                opacity: 0,
                filter: "blur(10px)",
            }}
            transition={{
                duration: 1.2,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}