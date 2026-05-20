"use client";

import {
    Pause,
    Play,
    SkipBack,
    SkipForward,
    Volume2,
    ListMusic,
} from "lucide-react";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function MusicSection() {

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const formatTime = (time: number) => {

        const minutes = Math.floor(time / 60);

        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const toggleMusic = async () => {

        if (!audioRef.current) return;

        try {

            if (playing) {

                audioRef.current.pause();

            } else {

                await audioRef.current.play();

            }

            setPlaying(!playing);

        } catch (err) {

            console.log("Audio play failed:", err);

        }
    };

    useEffect(() => {

        const audio = audioRef.current;

        if (!audio) return;

        const updateTime = () => {

            setCurrentTime(audio.currentTime);

        };

        const updateDuration = () => {

            setDuration(audio.duration);

        };

        audio.addEventListener("timeupdate", updateTime);

        audio.addEventListener("loadedmetadata", updateDuration);

        return () => {

            audio.removeEventListener("timeupdate", updateTime);

            audio.removeEventListener("loadedmetadata", updateDuration);

        };

    }, []);

    return (
        <section className="relative mt-10 w-full max-w-5xl">

            {/* OUTER GLOW */}
            <div className="absolute inset-0 rounded-[36px] bg-[#f4d9c8]/10 blur-3xl" />

            {/* PLAYER */}
            <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-white/[0.08] px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-[40px]">

                {/* CINEMATIC LIGHT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/[0.03] to-transparent" />

                {/* TOP LIGHT LINE */}
                <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                {/* GLOW DOT */}
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe7d2] shadow-[0_0_20px_#ffe7d2]" />

                {/* CONTENT */}
                <div className="relative z-10 flex items-center justify-between gap-6">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                        {/* COVER */}
                        <div className="relative h-16 w-16 overflow-hidden rounded-2xl shadow-lg">

                            <Image
                                src="/images/music-cover.jpg"
                                alt="cover"
                                fill
                                sizes="64px"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/10" />

                        </div>

                        {/* TEXT */}
                        <div>

                            <h3 className="font-[family:var(--font-cormorant)] text-[28px] leading-none text-[#f7eee9]">

                                A Moment With You

                            </h3>

                            <p className="mt-2 text-sm tracking-wide text-white/55">

                                Salt of the Sound

                            </p>

                        </div>

                    </div>

                    {/* CONTROLS */}
                    <div className="hidden items-center gap-6 md:flex">

                        <button className="text-white/60 transition-all duration-300 hover:scale-110 hover:text-white">

                            <SkipBack size={20} strokeWidth={1.8} />

                        </button>

                        {/* PLAY BUTTON */}
                        <button
                            onClick={toggleMusic}
                            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#f8efe8] shadow-[0_0_30px_rgba(255,240,228,0.35)] transition-all duration-500 hover:scale-105"
                        >

                            <div className="absolute inset-0 rounded-full bg-white/40 blur-xl" />

                            {playing ? (
                                <Pause
                                    size={24}
                                    className="relative z-10 text-[#2d2522]"
                                />
                            ) : (
                                <Play
                                    size={24}
                                    className="relative z-10 ml-1 text-[#2d2522]"
                                />
                            )}

                        </button>

                        <button className="text-white/60 transition-all duration-300 hover:scale-110 hover:text-white">

                            <SkipForward size={20} strokeWidth={1.8} />

                        </button>

                    </div>

                    {/* RIGHT */}
                    <div className="hidden items-center gap-6 md:flex">

                        <p className="text-sm tracking-[0.08em] text-white/60">

                            {formatTime(currentTime)} / {formatTime(duration)}

                        </p>

                        <Volume2
                            size={18}
                            strokeWidth={1.8}
                            className="text-white/60"
                        />

                        <ListMusic
                            size={18}
                            strokeWidth={1.8}
                            className="text-white/60"
                        />

                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={toggleMusic}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8efe8] shadow-lg md:hidden"
                    >

                        {playing ? (
                            <Pause size={18} className="text-[#2d2522]" />
                        ) : (
                            <Play size={18} className="ml-1 text-[#2d2522]" />
                        )}

                    </button>

                </div>

            </div>

            {/* AUDIO */}
            <audio ref={audioRef} loop preload="auto">

                <source
                    src="/music/ambient.mp3"
                    type="audio/mpeg"
                />

            </audio>

        </section>
    );
}