"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-display flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center ">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-black shadow-lg shadow-emerald-500/10 mb-4">
            <img src="/univest-logo.png" alt="UnivestAI" className="size-7" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">UnivestAI</h1>
        </div>

        {/* Form Card */}
        <div className="relative p-8 rounded-3xl  bg-white/2 backdrop-blur-xl">
          {!submitted ? (
            <>
              <div className="mb-8">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Be the first to know when we launch our AI-powered student investment portal. Secure your early-access spot now.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 bg-black border border-white/10 rounded-full pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all placeholder:text-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-white text-black font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all active:scale-[0.98]"
                >
                  <span>Join</span>
                </button>
              </form>

              <p className="mt-6 text-center text-[11px] text-gray-600 uppercase tracking-widest">
                No Spam • No Fluff • Pure Innovation
              </p>
            </>
          ) : (
            <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
              <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10 mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">You're on the list!</h2>
              <p className="text-gray-400 text-sm mb-8">
                We've sent a confirmation to <span className="text-white font-medium">{email}</span>. Keep an eye on your inbox.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-emerald-400 text-sm font-bold hover:underline"
              >
                Use another email
              </button>
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
}