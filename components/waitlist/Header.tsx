import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
  <header className="fixed top-5 left-0 right-0 z-50 px-4">
  <div className="mx-auto max-w-5xl h-16 bg-background/80 backdrop-blur-lg border border-border/30 shadow-sm rounded-full px-6 flex items-center justify-between">
    
    {/* Logo Area */}
    <div className="flex items-center">
      <img src="/univest-logo.png" alt="Univest" className="h-24 w-auto" /> 
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-8">
      <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
        How it works
      </a>
      <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
        Why students?
      </a>
    </nav>
      <Button size="sm" variant="outline" className="rounded-lg px-4 py-2 text-md" asChild>
        <a href="#waitlist">Join Waitlist</a>
      </Button>
  </div>
</header>
  );
};

export default Header;