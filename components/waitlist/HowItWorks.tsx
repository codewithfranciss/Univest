import { ArrowRightLeft, ShieldCheck, Zap, Wallet, GraduationCap, LineChart, Building2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-14 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-4">
              Bridging the gap between <span className="text-primary text-glow">dorm rooms</span> and <span className="italic">deal flow.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A dual-sided ecosystem designed to remove the friction of early-stage venture capital.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Investor Column */}
          <div className="lg:col-span-4 group">
            <div className="h-full p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">For Backers</h3>
              </div>
              
              <ul className="space-y-6">
                <li className="space-y-2">
                  <span className="text-sm font-bold uppercase tracking-tighter text-primary/70">Source</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">Access vetted equity opportunities from Tier-1 research institutions before they hit Sand Hill Road.</p>
                </li>
                <li className="space-y-2">
                  <span className="text-sm font-bold uppercase tracking-tighter text-primary/70">Execute</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">Deploy capital instantly via standardized SAFE notes with zero administrative overhead.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Connector / Engine */}
          <div className="lg:col-span-4 relative min-h-[300px] flex items-center justify-center">
             {/* Animated Connection Lines (Desktop) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[80px] rounded-full" />
            </div>

            <div className="relative z-10 text-center p-8 rounded-full border-2 border-primary/20 bg-background shadow-2xl aspect-square flex flex-col items-center justify-center w-64 h-64">
              <div className="p-4 rounded-full bg-primary text-primary-foreground animate-pulse-slow mb-4">
                <ArrowRightLeft className="w-8 h-8" />
              </div>
              <span className="font-bold tracking-tight">The Univest Engine</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">Legal • Escrow • KYC</p>
            </div>
          </div>

          {/* Founder Column */}
          <div className="lg:col-span-4 group">
            <div className="h-full p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">For Builders</h3>
              </div>

              <ul className="space-y-6">
                <li className="space-y-2">
                  <span className="text-sm font-bold uppercase tracking-tighter text-primary/70">Validate</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">Turn your senior project or lab research into a funded entity with guided pitch support.</p>
                </li>
                <li className="space-y-2">
                  <span className="text-sm font-bold uppercase tracking-tighter text-primary/70">Scale</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">Unlock a network of alumni mentors and institutional angels who know your campus ecosystem.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;