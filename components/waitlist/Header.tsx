import { Button } from "@/components/ui/button";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 section-padding py-4 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="container-tight flex items-center justify-between">
       
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How it works
          </a>
          <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Why students?
          </a>
        </nav>

        <Button variant="outline" size="sm" asChild>
          <a href="#waitlist">Join Waitlist</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;