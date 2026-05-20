"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

export default function Countdown() {

    // CHANGE THIS DATE
    const targetDate =
        new Date("2026-05-20T00:00:00");

    const [timeLeft, setTimeLeft] =
        useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });

    const [birthdayStarted, setBirthdayStarted] =
        useState(false);

    const [openCelebration, setOpenCelebration] =
        useState(false);

    const [sliceCut, setSliceCut] =
        useState(false);

    const [showMessage, setShowMessage] =
        useState(false);

    useEffect(() => {

        const interval = setInterval(() => {

            const now = new Date().getTime();

            const distance =
                targetDate.getTime() - now;

            if (distance <= 0) {

                setBirthdayStarted(true);

                clearInterval(interval);

                return;
            }

            setTimeLeft({

                days: Math.floor(
                    distance / (1000 * 60 * 60 * 24)
                ),

                hours: Math.floor(
                    (distance %
                        (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                ),

                minutes: Math.floor(
                    (distance %
                        (1000 * 60 * 60)) /
                    (1000 * 60)
                ),

                seconds: Math.floor(
                    (distance %
                        (1000 * 60)) / 1000
                ),
            });

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="relative mt-14 flex flex-col items-center overflow-hidden">

            {/* AMBIENT GLOW */}
            <div className="absolute h-[500px] w-[500px] rounded-full " />

            {/* COUNTDOWN */}
            {!birthdayStarted && (

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="relative z-10 flex flex-col items-center"
                >

                    {/* LABEL */}
                    <p className="mb-10 text-sm uppercase tracking-[0.45em] text-[#c6a894]">

                        Until Your Day

                    </p>

                    {/* TIMER */}
                    <div className="flex flex-wrap items-center justify-center gap-5">

                        <TimeCard
                            value={timeLeft.days}
                            label="Days"
                        />

                        <TimeCard
                            value={timeLeft.hours}
                            label="Hours"
                        />

                        <TimeCard
                            value={timeLeft.minutes}
                            label="Minutes"
                        />

                        <TimeCard
                            value={timeLeft.seconds}
                            label="Seconds"
                        />

                    </div>

                    {/* MESSAGE */}
                    <motion.p
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="mt-12 max-w-xl text-center text-lg leading-relaxed text-white/50"
                    >

                        Waiting quietly for the moment
                        the world becomes softer,
                        brighter, and entirely yours.

                    </motion.p>

                </motion.div>

            )}

            {/* BIRTHDAY START */}
            {birthdayStarted && (

    <div className="relative z-10 flex items-center justify-center">

        <motion.button

            whileHover={{
                scale: 1.03,
            }}

            whileTap={{
                scale: 0.98,
            }}

            onClick={() => {

                setOpenCelebration(true);

                setTimeout(() => {
                    setSliceCut(true);
                }, 2200);

                setTimeout(() => {
                    setShowMessage(true);
                }, 3200);

            }}

            className="relative"
        >

            {/* SOFT GLOW */}
            <motion.div

                animate={{
                    opacity: [0.35, 0.6, 0.35],
                    scale: [1, 1.08, 1],
                }}

                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                className="
                    absolute
                    inset-0
                    rounded-full
                "
            />

            {/* FLOATING CAKE */}
            <motion.div

                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1.5, 0, -1.5, 0],
                }}

                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                <Image
                    src="/images/cake-ui.png"
                    alt="Birthday Cake"
                    width={320}
                    height={320}
                    priority
                    className="
                        relative z-10
                        object-contain
                        drop-shadow-[0_30px_90px_rgba(255,220,200,0.25)]
                    "
                />

            </motion.div>

        </motion.button>

    </div>

)}

            {/* FULLSCREEN CELEBRATION */}
            {/* FULLSCREEN CELEBRATION */}

            <AnimatePresence>

                {openCelebration && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                        onClick={() => {
                            setOpenCelebration(false);
                            setShowMessage(false);
                            setSliceCut(false);
                        }}

                        className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#120f12]/92 backdrop-blur-2xl"
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 1.3,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 2,
                            }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,220,200,0.08),transparent_70%)]"
                        />
                        {/* BIG AMBIENT GLOW */}
                        <div className="absolute h-[900px] w-[900px] rounded-full bg-[#ffd8c8]/10 blur-[180px]" />

                        {/* CONTENT */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex flex-col items-center"
                        >

                            {/* FLOATING CAKE */}
                            <motion.div
                                initial={{
                                    scale: 0.2,
                                    opacity: 0,
                                    y: 120,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    y: 0,
                                    rotate: [8, -3, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative"
                            >

                                <motion.div
                                    animate={{
                                        y: [0, -18, 0],
                                        rotate: [0, 1.5, 0, -1.5, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative"
                                >

                                    {/* MAIN CAKE */}
                                    <Image
                                        src="/images/luxury-cake.png"
                                        alt="Luxury Cake"
                                        width={520}
                                        height={520}
                                        priority
                                        className="object-contain drop-shadow-[0_50px_140px_rgba(255,220,200,0.28)]"
                                    />

                                    {/* REAL CAKE SLICE */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.7,
                                        }}

                                        animate={
                                            sliceCut
                                                ? {
                                                    opacity: 1,
                                                    x: 180,
                                                    y: 140,
                                                    rotate: 18,
                                                    scale: 1,
                                                }
                                                : {}
                                        }

                                        transition={{
                                            duration: 1.8,
                                            delay: 0.3,
                                        }}

                                        className="absolute right-[80px] top-[210px]"
                                    >

                                        <Image
                                            src="/images/cake-slice.png"
                                            alt="Cake Slice"
                                            width={180}
                                            height={180}
                                            unoptimized
                                            className="object-contain mix-blend-lighten drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                                        />

                                    </motion.div>

                                </motion.div>

                            </motion.div>

                            {/* MESSAGE BELOW CAKE */}
                            <AnimatePresence>

                                {showMessage && (

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
                                            duration: 1.4,
                                        }}

                                        className="mt-10 text-center"
                                    >

                                        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d7b7a6]">

                                            For Someone Precious

                                        </p>

                                        <h1 className="font-[family:var(--font-cormorant)] text-7xl leading-none text-[#fff5ef]">

                                            Happy Birthday

                                        </h1>

                                        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">

                                            Some souls arrive softly,
                                            yet leave a permanent warmth
                                            in every corner of life.

                                        </p>

                                        <p className="mt-6 text-sm tracking-[0.3em] uppercase text-white/30">

                                            Tap anywhere to close

                                        </p>

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>
        </section>
    );
}

/* TIMER CARD */

function TimeCard({
    value,
    label,
}: {
    value: number;
    label: string;
}) {

    return (

        <motion.div
            whileHover={{
                y: -4,
            }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] px-8 py-7 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-3xl"
        >

            {/* LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            <div className="relative z-10 flex flex-col items-center">

                <motion.h2
                    key={value}
                    initial={{
                        opacity: 0.5,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="font-[family:var(--font-cormorant)] text-6xl leading-none text-[#fff4ee]"
                >

                    {String(value).padStart(2, "0")}

                </motion.h2>

                <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/40">

                    {label}

                </p>

            </div>

        </motion.div>
    );
}