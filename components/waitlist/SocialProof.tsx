import { Waves, Coins, Brain, Diamond } from "lucide-react"; // Import the icons

export default function SocialProof() {
  const logos = [
    { icon: Waves, name: "FutureFlow" },
    { icon: Coins, name: "InnonateVest" },
    { icon: Brain, name: "VentureMind" },
    { icon: Diamond, name: "ProdigyInvest" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <p className="text-center text-base font-normal leading-normal text-gray-400 mb-10">
        Reliable AI-Powered investment Tools Trusted by Individuals and Institutions Alike
      </p>
      
      <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {logos.map((logo) => {
          const IconComponent = logo.icon; // Extract the component
          return (
            <div 
              key={logo.name} 
              className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default group"
            >
              {/* Render the Lucide Icon */}
              <IconComponent 
                className="h-7 w-7 text-white group-hover:text-emerald-400 transition-colors" 
                strokeWidth={1.5}
              />
              <span className="text-lg font-bold text-white tracking-wide font-display">
                {logo.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}