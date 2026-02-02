import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { AlertTriangle, GraduationCap, Briefcase } from 'lucide-react';
import event5 from '@/assets/event-5.png';

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const percentage = useCountUp(80, 2000, isVisible);

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Header */}
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              The Problem We're Solving
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              India Doesn't Have a Talent Gap
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              It has a <span className="text-secondary font-semibold">Skills Gap</span>
            </p>

            {/* Main statistic */}
            <div className="mb-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-7xl md:text-8xl font-bold text-secondary">
                  {percentage}
                </span>
                <span className="text-5xl md:text-6xl font-bold text-secondary">%</span>
              </div>
              <p className="text-xl text-muted-foreground mt-2">
                of Indian graduates are <span className="text-secondary font-semibold">unemployable</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                — India Skills Report, 2024
              </p>
            </div>

            {/* Comparison cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Problem card */}
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Current Education</h3>
                <p className="text-sm text-muted-foreground">
                  Schools focus on rote learning, not real-world problem solving.
                </p>
              </div>

              {/* Solution card */}
              <div className="p-6 rounded-xl bg-card border border-primary/20 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">What's Needed</h3>
                <p className="text-sm text-muted-foreground">
                  Skill-holders with employability skills and critical thinking.
                </p>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-8 p-4 rounded-lg bg-accent/10 border-l-4 border-accent">
              <p className="text-lg font-medium">
                Education produces <span className="text-muted-foreground">degree-holders</span>.
                <br />
                The future needs <span className="text-google-blue font-bold">skill-holders</span>.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-accent/20 p-8">
              <img 
                src={event5} 
                alt="Education Workshop" 
                className="w-full h-auto object-cover rounded-xl"
              />
              
              {/* Floating stat */}
              <div className="absolute top-4 right-4 bg-card rounded-lg p-3 shadow-lg">
                <AlertTriangle className="w-6 h-6 text-secondary mb-1" />
                <p className="text-xs font-medium">Skills Gap Crisis</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-google-red/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-google-yellow/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
