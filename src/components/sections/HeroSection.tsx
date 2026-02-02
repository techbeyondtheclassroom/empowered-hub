import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useScrollAnimation';
import event1 from '@/assets/event-1.png';
import event2 from '@/assets/event-2.png';
import event3 from '@/assets/event-3.png';
import event4 from '@/assets/event-4.png';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImages = [event1, event2, event3, event4];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/30 pt-20">
      {/* Floating decorative elements */}
      <div 
        className="absolute top-40 left-10 w-64 h-64 bg-google-blue/10 rounded-full blur-3xl floating-animation"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-google-red/10 rounded-full blur-3xl floating-animation-delayed"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-google-yellow/10 rounded-full blur-2xl floating-animation-slow"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />
      <div 
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-google-green/10 rounded-full blur-2xl floating-animation"
        style={{ transform: `translateY(${parallaxOffset * 0.35}px)` }}
      />

      {/* Main content */}
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-left">
            {/* Badge */}
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Nonprofit Organization
              </span>
            </div>

            {/* Main headline with Google-style colors */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block overflow-hidden">
                <span className="block animate-text-reveal" style={{ animationDelay: '0.4s' }}>
                  Education
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-text-reveal" style={{ animationDelay: '0.6s' }}>
                  <span className="text-google-blue">B</span>
                  <span className="text-google-red">e</span>
                  <span className="text-google-yellow">y</span>
                  <span className="text-google-blue">o</span>
                  <span className="text-google-green">n</span>
                  <span className="text-google-red">d</span>
                  <span className="text-foreground"> the Classroom</span>
                </span>
              </span>
            </h1>

            {/* Tagline */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              Empowering youth with confidence, skills, and opportunities that prepare students for life beyond textbooks.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '1s' }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 px-8"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 px-8"
                asChild
              >
                <a href="https://lnkd.in/gwaTwkvy" target="_blank" rel="noopener noreferrer">
                  Join Us
                </a>
              </Button>
            </div>

            {/* Stats preview */}
            <div 
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            >
              {[
                { number: '1500+', label: 'Students Impacted', color: 'text-google-blue' },
                { number: '30+', label: 'Partnerships', color: 'text-google-red' },
                { number: '4', label: 'Core Programs', color: 'text-google-yellow' },
                { number: '3', label: 'SDGs Focused', color: 'text-google-green' },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div 
            className="relative opacity-0 animate-fade-in-right"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="grid grid-cols-2 gap-4">
              {heroImages.map((img, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${
                    index === 0 ? 'row-span-2' : ''
                  } ${index === 0 ? 'aspect-[3/4]' : 'aspect-square'} group`}
                >
                  <img 
                    src={img} 
                    alt={`Education Event ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    index === 0 ? 'from-google-blue/30' :
                    index === 1 ? 'from-google-red/30' :
                    index === 2 ? 'from-google-yellow/30' :
                    'from-google-green/30'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ))}
            </div>

            {/* Floating decorative card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border/50 animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-google-blue flex items-center justify-center text-primary-foreground text-xs font-bold">B</div>
                  <div className="w-8 h-8 rounded-full bg-google-red flex items-center justify-center text-primary-foreground text-xs font-bold">T</div>
                  <div className="w-8 h-8 rounded-full bg-google-green flex items-center justify-center text-primary-foreground text-xs font-bold">C</div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Youth-Led Movement</div>
                  <div className="text-xs text-muted-foreground">Across India</div>
                </div>
              </div>
            </div>
          </div>
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
