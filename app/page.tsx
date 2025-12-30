import Image from "next/image";
import Header from "@/components/waitlist/Header";
import Hero from "@/components/waitlist/Hero";
import HowItWorks from "@/components/waitlist/HowItWorks";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
        <Hero />
        <HowItWorks />
        <WaitlistForm />
    </div>
  );
}
