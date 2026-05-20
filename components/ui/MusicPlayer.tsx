"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = 0.4;
    }, []);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            await audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                src="/music/ambient.mp3"
            />

            <motion.button
                whileHover={{
                    scale: 1.05,
                    y: -2,
                }}
                whileTap={{
                    scale: 0.96,
                }}
                onClick={toggleMusic}
                className="glass fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-3 text-sm text-white/80 shadow-[0_0_40px_rgba(214,194,161,0.08)]"
            >
                {isPlaying ? (
                    <Pause size={16} />
                ) : (
                    <Play size={16} />
                )}

                <span>
                    Ambient Audio
                </span>
            </motion.button>
        </>
    );
}