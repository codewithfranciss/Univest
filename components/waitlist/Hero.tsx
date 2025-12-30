import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient orbs */}
     
      
      <div className="container-tight text-center relative z-10">
        {/* Badge */}


        {/* Main headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up animation-delay-200">
          <span className="text-foreground">Back the founders</span>
          <br />
          <span className="text-primary">before they graduate</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-400">
          The best startups aren't waiting for permission. They're being built in dorm rooms, 
          libraries, and campus labs right now. Get in early.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-600">
          <Button variant="hero" size="xl" asChild>
            <a href="#waitlist">
              Request Early Access
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#how-it-works" className="flex items-center gap-2">
              See how it works
              <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Social proof */}
      </div>
    </section>
  );
};

export default Hero;
