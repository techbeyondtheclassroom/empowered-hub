import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Hammer, ArrowRight, Link, Star } from 'lucide-react';

const ModelSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const steps = [
    {
      letter: 'B',
      title: 'Build',
      icon: Hammer,
      description: 'Knowledge, skills, and confidence through hands-on learning experiences and practical workshops.',
      gradient: 'from-primary to-purple-mid',
      delay: '0.2s',
    },
    {
      letter: 'B',
      title: 'Bridge',
      icon: Link,
      description: 'The gap between education and employability by connecting youth with mentors, opportunities, and real-world challenges.',
      gradient: 'from-purple-mid to-secondary',
      delay: '0.4s',
    },
    {
      letter: 'B',
      title: 'Become',
      icon: Star,
      description: 'Leaders and changemakers who turn learning into lasting impact in their communities and beyond.',
      gradient: 'from-secondary to-accent',
      delay: '0.6s',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), 
                           linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%), 
                           linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="gradient-text">3B Model</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the classroom to the community — we help youth and women build, bridge, and become.
          </p>
        </div>

        {/* 3B Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: step.delay }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group h-full">
                  {/* Step number with icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-4xl font-bold text-primary-foreground">{step.letter}</span>
                    </div>
                    {/* Small icon badge */}
                    <div className="absolute -bottom-2 -right-2 left-1/2 transform translate-x-6 w-10 h-10 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-md">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center mb-4 gradient-text">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow to next step (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center rotate-90">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div 
          className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Build. Bridge. <span className="gradient-text font-bold">Become.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
