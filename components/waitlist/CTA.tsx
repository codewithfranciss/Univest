export default function CTA() {
  return (
    <section className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-xs font-medium leading-5 text-emerald-400">
          <span className="material-symbols-outlined mr-1.5 text-[14px]"></span>
          Get Started
        </div>
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
          Join Thousands of Investors <br className="hidden sm:block" />
          on the Path to Growth
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          Start with our free plan and upgrade as you go. Sign up now and see the difference AI can make.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row">
          <button className="flex h-12 w-full items-center justify-center rounded-lg bg-emerald-400 px-8 text-base font-bold text-black transition hover:bg-emerald-300 active:scale-95 sm:w-auto">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}