import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Users, Handshake, Building, Award } from 'lucide-react';
import event4 from '@/assets/event-4.png';
import event5 from '@/assets/event-5.png';
import event6 from '@/assets/event-6.png';
import event7 from '@/assets/event-7.png';

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const students = useCountUp(1500, 2000, isVisible);
  const partnerships = useCountUp(30, 2000, isVisible);

  const stats = [
    { icon: Users, value: `${students}+`, label: 'Students Engaged', color: 'text-primary' },
    { icon: Handshake, value: `${partnerships}+`, label: 'Partnerships', color: 'text-secondary' },
    { icon: Building, value: '5+', label: 'Ministry Recognitions', color: 'text-accent' },
    { icon: Award, value: '3', label: 'SDGs Addressed', color: 'text-pink-end' },
  ];

  const partners = [
    'Ministry of Electronics & IT',
    'Ministry of Skill Development',
    'AIM by NITI Aayog',
    'AICTE',
    'ACIC SGTU',
    'Cabinet Ministers',
    'State Governments',
  ];

  const photos = [event4, event5, event6, event7];

  return (
    <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Creating <span className="gradient-text">Real Change</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized by Cabinet Ministers & State Governments for our youth-driven model.
          </p>
        </div>

        {/* Stats grid */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Photo collage */}
        <div 
          className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Moments of Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="relative rounded-xl overflow-hidden aspect-square group shadow-lg"
              >
                <img 
                  src={photo} 
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Partners marquee */}
        <div 
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Supported By</h3>
          <div className="relative overflow-hidden py-4">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Scrolling content */}
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-8"
                >
                  <div className="bg-card rounded-lg px-6 py-3 shadow-md border border-border/50 whitespace-nowrap hover:border-primary/30 transition-colors">
                    <span className="font-medium text-foreground">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Road ahead teaser */}
        <div 
          className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">The Road Ahead</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '100+', label: 'Schools & Colleges by 2025' },
                { number: '1,00,000', label: 'Youth by 2026' },
                { number: '1', label: 'Online Learning Platform' },
                { number: '1', label: 'Beyond Fellowship Launch' },
              ].map((item, index) => (
                <div key={index} className="p-3">
                  <div className="text-xl font-bold gradient-text">{item.number}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
