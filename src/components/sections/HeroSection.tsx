import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating decorative elements */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating-animation-delayed"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl floating-animation-slow"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-32 right-20 opacity-20">
        <div className="w-4 h-4 bg-primary rounded-full floating-animation" />
      </div>
      <div className="absolute bottom-40 left-32 opacity-20">
        <div className="w-6 h-6 bg-secondary rounded-full floating-animation-delayed" />
      </div>
      <div className="absolute top-1/2 left-20 opacity-15">
        <Sparkles className="w-8 h-8 text-primary floating-animation-slow" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 text-center px-4">
        {/* Logo / Brand */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            Nonprofit Organization
          </span>
        </div>

        {/* Main headline with text reveal animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block overflow-hidden">
            <span className="block animate-text-reveal" style={{ animationDelay: '0.4s' }}>
              Education
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block gradient-text animate-text-reveal" style={{ animationDelay: '0.6s' }}>
              Beyond the Classroom
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          Empowering youth with confidence, skills, and opportunities that prepare students for life beyond textbooks.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 px-8"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Programs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-105 px-8"
            asChild
          >
            <a href="https://lnkd.in/gwaTwkvy" target="_blank" rel="noopener noreferrer">
              Join Us
            </a>
          </Button>
        </div>

        {/* Stats preview */}
        <div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s' }}
        >
          {[
            { number: '1500+', label: 'Students Impacted' },
            { number: '30+', label: 'Partnerships' },
            { number: '4', label: 'Core Programs' },
            { number: '3', label: 'SDGs Focused' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
