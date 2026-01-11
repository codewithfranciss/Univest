export default function Features() {
  const features = [
    { title: "Real-Time Portfolio Tracking", desc: "Stay ahead of the market with live price updates, real-time portfolio valuation, and instant gain/loss tracking.", img: "/portfolio.png" },
    { title: "AI-Powered Stock Insights", desc: "Smart recommendations based on market trends, student innovator performance data, and advanced AI-driven sentiment analysis.", img: "/stock.png" },
    { title: "Alerts & Smart Notifications", desc: "Set personalized alerts for significant project milestones or market shifts, ensuring you never miss a student innovation opportunity.", img: "/alert.png" },
    { title: "Diversification & Risk Analysis", desc: "Optimize your student venture portfolio with sector allocation insights and risk assessment tools built for long-term growth.", img: "/risk.png" },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-xs font-medium leading-5 text-emerald-400">
            <span className="material-symbols-outlined mr-1.5 text-[14px]"></span>
            Platform Features
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Supercharge Your Growth</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">From real-time tracking to AI-driven insights, our platform provides everything you need.</p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col rounded-2xl border border-emerald-500/20 bg-black p-8">
              <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-emerald-500/20">
                <img src={feature.img} alt={feature.title} className="h-full w-full object-cover opacity-90" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}