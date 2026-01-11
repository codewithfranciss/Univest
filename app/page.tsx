import Navbar from "@/components/waitlist/Navbar";
import Hero from "@/components/waitlist/Hero";
import DashboardPreview from "@/components/waitlist/DashboardPreview";
import SocialProof from "@/components/waitlist/SocialProof";
import Features from "@/components/waitlist/Features";
import FAQ from "@/components/waitlist/FAQ";
export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <div className="relative isolate overflow-hidden pt-14">
          
          {/* Background Decorative Gradient (optional, adjusted for black theme) */}
          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)]  -translate-x-1/2  opacity-20 sm:left-[calc(50%-30rem)] "></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Hero />
            <DashboardPreview />
            <SocialProof />
          </div>

          <Features />
          <FAQ />
        </div>
      </main>
    </div>
  );
}