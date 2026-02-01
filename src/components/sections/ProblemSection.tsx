import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { AlertTriangle, TrendingUp, GraduationCap, Briefcase } from 'lucide-react';

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const percentage = useCountUp(80, 2000, isVisible);

  return (
    <section className="py-20 lg:py-32 gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <AlertTriangle className="w-24 h-24 text-secondary floating-animation" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <GraduationCap className="w-32 h-32 text-accent floating-animation-delayed" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              The Problem We're Solving
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              India Doesn't Have a Talent Gap
            </h2>
            <p className="text-xl text-primary-foreground/80">
              It has a <span className="text-secondary font-semibold">Skills Gap</span>
            </p>
          </div>

          {/* Main statistic */}
          <div 
            className={`text-center mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="inline-flex items-baseline gap-2">
              <span className="text-8xl md:text-9xl font-bold text-secondary">
                {percentage}
              </span>
              <span className="text-6xl md:text-7xl font-bold text-secondary">%</span>
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mt-4">
              of Indian graduates are <span className="text-secondary font-semibold">unemployable</span>
            </p>
            <p className="text-sm text-primary-foreground/60 mt-2">
              — India Skills Report, 2024
            </p>
          </div>

          {/* Comparison cards */}
          <div 
            className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            {/* Problem card */}
            <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">Current Education</h3>
              <p className="text-primary-foreground/70">
                Schools and colleges focus on rote learning, not real-world problem solving. 
                Young people, especially women, lack access to mentors, exposure, and 
                opportunities that align with market needs.
              </p>
            </div>

            {/* Solution card */}
            <div className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">What's Needed</h3>
              <p className="text-primary-foreground/70">
                Education that produces skill-holders, not just degree-holders. 
                Youth need employability skills, critical thinking, and 
                real-world connections to thrive in the future.
              </p>
            </div>
          </div>

          {/* Bottom quote */}
          <div 
            className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <p className="text-2xl md:text-3xl font-medium">
              Education produces <span className="text-primary-foreground/60">degree-holders</span>.
            </p>
            <p className="text-2xl md:text-3xl font-medium mt-2">
              The future needs <span className="text-secondary font-bold">skill-holders</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
