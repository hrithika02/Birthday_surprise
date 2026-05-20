import LetterCard from "@/components/memory/LetterCard";
import MemoryStrip from "@/components/memory/MemoryStrip";
import MusicSection from "@/components/memory/MusicSection";
import Countdown from "@/components/memory/Countdown";
// import BirthdayCake from "@/components/memory/BirthdayCake";
import FinalMessage from "@/components/memory/FinalMessage";

export default function MemoriesPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#d7cbcd] text-[#2d2522]">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f8ece6_0%,#c9bcc2_40%,#9b929e_100%)]" />

                <div className="absolute inset-0 bg-black/5" />

                <div className="absolute inset-0 backdrop-blur-[120px]" />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center px-4 py-6 md:px-8">

                <LetterCard />

                <MemoryStrip />

                <MusicSection />

                <Countdown />

                {/* <BirthdayCake /> */}

                <FinalMessage />

            </div>

        </main>
    );
}