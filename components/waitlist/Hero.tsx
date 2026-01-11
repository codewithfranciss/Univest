import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:mb-6 sm:text-6xl leading-tight">
          AI-Powered Investing <br className="hidden sm:block" />
          Made Simple With <span className="text-emerald-400">Univest</span>
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-gray-400 sm:mb-10 sm:max-w-2xl sm:text-lg">
          Univest uses AI, mentorship, and smart matching to help student founders showcase their ideas, connect with the right investors, and turn innovation into real-world impact.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-8 text-base font-bold text-black transition hover:bg-emerald-300 active:scale-95 sm:w-auto">
            <Rocket className="h-5 w-5" /> 
            <span>Pitch Your Idea</span>
          </button>

          <button className="flex h-12 w-full items-center justify-center rounded-lg px-8 text-base font-bold text-gray-400 transition hover:bg-emerald-500/10 active:scale-95 sm:w-auto">
            Discover Student Startups
          </button>
        </div>
      </div>
    </section>
  );
}