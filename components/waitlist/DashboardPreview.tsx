export default function DashboardPreview() {
  return (
    <div className="mt-16 flow-root sm:mt-24">
      <div className="-m-2 rounded-xl bg-white/5 p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
        <div className="relative overflow-hidden rounded-lg bg-black border border-emerald-500/20 aspect-[16/9] md:aspect-[2/1] lg:aspect-[21/9]">
          {/* Faux UI Header */}
          <div className="absolute top-0 z-10 flex h-10 w-full items-center gap-2 border-b border-emerald-500/20 bg-black px-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto h-5 w-1/3 rounded-md bg-white/10"></div>
          </div>

          {/* Background Image */}
          <div className="mt-10 h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDe0GYJaSMOmtWbXExmUM_FlpbMzzMwC2k9uzfNHzK6uis4geiwdZMTCOUlzE2XfQsYYAmZEgfS9PfBiKCZ2o9Lg9fRPZ82GyYjYntTqoG3m1tRDtyBa7xqvsIHaoMTS9kz_h2AHcn0IWawQ-zjxb-XdbClgcuAlRsAIqtPnCf9Q64zkAJYVeICioBpU2cgkra-OqLFoZ8b6eu5fW4AS9y6biHFcplUIddHmtvflPxLULi8L-VcAmwk94EaF7tjSRMn2LgXJ69N')" }}>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Floating Card: Balance */}
          <div className="absolute left-6 top-16 hidden w-64 rounded-lg border border-emerald-500/20 bg-black p-4 md:block">
            <div className="mb-1 text-xs text-gray-400">Total Balance</div>
            <div className="mb-2 text-2xl font-bold text-white">$124,532.00</div>
            <div className="flex items-center gap-1 text-sm font-medium text-emerald-400">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+12.4% APY</span>
            </div>
          </div>

          {/* Floating Card: Gauge */}
          <div className="absolute right-6 top-16 hidden w-48 rounded-lg border border-emerald-500/20 bg-black p-4 md:block">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs text-gray-400">Fear & Greed</div>
              <span className="material-symbols-outlined text-xs text-gray-400">info</span>
            </div>
            <div className="relative flex h-24 items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 100 50">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#334155" strokeWidth="8" />
                <path d="M 10 50 A 40 40 0 0 1 70 23" fill="none" stroke="#34d399" strokeWidth="8" />
              </svg>
              <div className="absolute bottom-0 text-center">
                <div className="text-2xl font-bold text-white">72</div>
                <div className="text-[10px] uppercase tracking-wide text-emerald-400">Greed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}