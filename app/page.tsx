import Hero from "@/components/hero/Hero";
import CursorGlow from "@/components/effects/CursorGlow";
import PageTransition from "@/components/effects/PageTransition";

export default function Home() {
  return (
    <main className="noise">
      <CursorGlow />
      <PageTransition>
  <Hero />
</PageTransition>
    </main>
  );
}