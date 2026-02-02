import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Hammer, Link, Star, ArrowRight } from 'lucide-react';
import event7 from '@/assets/event-7.png';

const ModelSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const steps = [
    {
      letter: 'B',
      title: 'Build',
      icon: Hammer,
      description: 'Knowledge, skills, and confidence through hands-on learning.',
      color: 'bg-google-blue',
      textColor: 'text-google-blue',
      delay: '0.2s',
    },
    {
      letter: 'B',
      title: 'Bridge',
      icon: Link,
      description: 'The gap between education and employability with mentors.',
      color: 'bg-google-red',
      textColor: 'text-google-red',
      delay: '0.4s',
    },
    {
      letter: 'B',
      title: 'Become',
      icon: Star,
      description: 'Leaders and changemakers who create lasting impact.',
      color: 'bg-google-green',
      textColor: 'text-google-green',
      delay: '0.6s',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3B Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: step.delay }}
              >
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex items-start gap-4">
                  {/* Step icon */}
                  <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-primary-foreground">{step.letter}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`text-xl font-bold ${step.textColor}`}>
                        {step.title}
                      </h3>
                      <step.icon className={`w-5 h-5 ${step.textColor}`} />
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Tagline */}
            <div 
              className={`pt-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <p className="text-xl font-medium">
                <span className="text-google-blue">Build</span>. 
                <span className="text-google-red"> Bridge</span>. 
                <span className="text-google-green"> Become</span>.
              </p>
            </div>
          </div>

          {/* Image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-google-yellow/10 p-6">
              <img 
                src={event7} 
                alt="3B Model in Action" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-3 shadow-xl border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-google-blue" />
                <div className="w-3 h-3 rounded-full bg-google-red" />
                <div className="w-3 h-3 rounded-full bg-google-green" />
              </div>
              <p className="text-sm font-medium mt-1">The 3B Framework</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
