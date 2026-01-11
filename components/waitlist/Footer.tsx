export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-8 items-center justify-center rounded-md border border-white/15 bg-black">
                <img src="/univest-logo.png" alt="UnivestAI Logo" className="size-5" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">UnivestAI</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-gray-400 mb-6">
              Receive weekly insights on student innovation and smarter investment decisions.
            </p>
            <form className="flex max-w-md gap-x-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="flex-auto rounded-md bg-black border border-white/15 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                placeholder="Email address"
              />
              <button type="submit" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Sections (Simplified for brevity) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
             {/* Repeat your link columns here similar to HTML */}
             <div>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-3">
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white">Careers</a></li>
                </ul>
             </div>
             <div>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Support</h3>
                <ul className="mt-4 space-y-3">
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
                </ul>
             </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2026 UnivestAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}