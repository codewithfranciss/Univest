import Image from "next/image";
import Header from "@/components/waitlist/Header";
import Hero from "@/components/waitlist/Hero";
import HowItWorks from "@/components/waitlist/HowItWorks";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
        <Hero />
        <HowItWorks />
    </div>
  );
}
