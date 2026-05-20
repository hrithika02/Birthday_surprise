import Image from "next/image";
import { ArrowLeft, Menu } from "lucide-react";

export default function LetterCard() {
    return (
        <section className="relative flex h-screen w-full items-start justify-center overflow-hidden px-4 pt-6 md:px-10">

            {/* TOP NAV */}
            <div className="absolute left-5 right-5 top-5 z-30 flex items-center justify-between md:left-10 md:right-10">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/20">

                        <ArrowLeft size={18} strokeWidth={1.7} />

                    </button>

                    <p className="text-[17px] font-light tracking-wide text-[#2d2522]">
                        Our Space
                    </p>

                </div>

                {/* RIGHT */}
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/20">

                    <Menu size={18} strokeWidth={1.7} />

                </button>

            </div>

            {/* ATMOSPHERIC BACK LIGHT */}
            <div className="absolute left-1/2 top-[12%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#f4d8cb]/20 blur-[140px]" />

            {/* LETTER CARD */}
            <div className="relative mt-16 h-[74vh] w-full max-w-[920px] overflow-hidden rounded-[34px] border border-white/25 bg-[#f7ede7]/82 shadow-[0_40px_90px_rgba(0,0,0,0.10)] backdrop-blur-3xl">

                {/* PAPER TEXTURE */}
                <div className="absolute inset-0 opacity-[0.035] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

                {/* INNER LIGHT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent" />

                {/* SIDE GLOW */}
                <div className="absolute right-[-100px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#f3d7c9]/20 blur-[120px]" />

                {/* FLOWER SHADOW */}
                <div className="absolute bottom-0 right-20 h-[480px] w-[180px] rotate-[8deg] bg-black/10 blur-3xl opacity-20" />

                {/* FLOWER */}
                <div className="absolute bottom-[-120px] right-[-20px] hidden h-[128%] md:block">

                    <Image
                        src="/images/flower.png"
                        alt="flower"
                        width={340}
                        height={700}
                        priority
                        loading="eager"
                        className="h-full w-auto object-contain opacity-95"
                    />

                </div>

                {/* SOFT CURVE LINE */}
                <div className="absolute right-12 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#e7c8ba] to-transparent opacity-50" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full items-start px-12 py-8 md:px-16 md:py-10">

                    <div className="max-w-[430px] -translate-y-2">

                        {/* LABEL */}
                        <p className="mb-2 text-[10px] uppercase tracking-[0.38em] text-[#c69c8e]">

                            A LETTER FOR YOU

                        </p>

                        {/* TITLE */}
                        <h1 className="font-[family:var(--font-caveat)] text-[30px] leading-[1.45] tracking-[0.02em] text-[#3d302b] md:text-[42px]">

                            To someone who
                            means more than words...

                        </h1>

                        {/* LETTER BODY */}
                        <div className="mt-8 rotate-[-1deg] space-y-2 font-[family:var(--font-caveat)] text-[16px] leading-[1.75] tracking-[0.03em] text-[#4a3d38]/80 md:text-[19px]">

                            <p>
                                Thank you for being that rare soul
                                who's kind without trying,
                                and real without any act.
                            </p>

                            <p>
                                You've a way of making ordinary
                                moments feel unforgettable.
                            </p>

                            <p>
                                This is my tiny way of saying
                                you matter more than you know.
                            </p>

                            <p>
                                I'm grateful for you today,
                                and for every day.
                            </p>

                            <div className="pt-2">
                                Always,
                                <br />
                                me
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}