import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Collaborate', href: '#collaborate' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Google Style */}
          <a href="#" className="flex items-center gap-1 font-bold text-xl md:text-2xl">
            <span className="text-google-blue">B</span>
            <span className="text-google-red">e</span>
            <span className="text-google-yellow">y</span>
            <span className="text-google-blue">o</span>
            <span className="text-google-green">n</span>
            <span className="text-google-red">d</span>
            <span className="text-foreground ml-1">the Classroom</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://lnkd.in/gwaTwkvy" target="_blank" rel="noopener noreferrer">
                Join Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/50">
          <div className="container px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://lnkd.in/gwaTwkvy" target="_blank" rel="noopener noreferrer">
                Join Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
