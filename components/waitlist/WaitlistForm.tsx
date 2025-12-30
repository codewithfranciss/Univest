"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Check, Lock, Users, Zap } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"investor" | "founder" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !role) {

      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="section-padding py-24">
        <div className="container-tight">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              You're in.
            </h2>
            <p className="text-muted-foreground mb-2">
              Position <span className="text-primary font-semibold">#2,437</span> on the waitlist
            </p>
            <p className="text-sm text-muted-foreground">
              We'll email you when it's your turn to join.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="section-padding py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container-tight relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Limited Early Access
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-4 mb-4">
              Get priority access to deals
            </h2>
            <p className="text-muted-foreground">
              Early waitlist members get first look at student startups and exclusive 
              investment opportunities.
            </p>
          </div>

          {/* Form card */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole("investor")}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      role === "investor"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card/50"
                    }`}
                  >
                    <span className="block font-semibold text-foreground mb-1">
                      Investor
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Looking to fund student startups
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("founder")}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      role === "founder"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card/50"
                    }`}
                  >
                    <span className="block font-semibold text-foreground mb-1">
                      Student Founder
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Building something and need capital
                    </span>
                  </button>
                </div>
              </div>

              {/* Email input */}
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="waitlist"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
