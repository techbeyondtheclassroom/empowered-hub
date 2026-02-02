import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Users, Handshake, Building, Award } from 'lucide-react';
import event4 from '@/assets/event-4.png';
import event8 from '@/assets/event-8.png';
import event9 from '@/assets/event-9.png';

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const students = useCountUp(1500, 2000, isVisible);
  const partnerships = useCountUp(30, 2000, isVisible);

  const stats = [
    { icon: Users, value: `${students}+`, label: 'Students Engaged', color: 'text-google-blue' },
    { icon: Handshake, value: `${partnerships}+`, label: 'Partnerships', color: 'text-google-red' },
    { icon: Building, value: '5+', label: 'Ministry Recognitions', color: 'text-google-yellow' },
    { icon: Award, value: '3', label: 'SDGs Addressed', color: 'text-google-green' },
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

  return (
    <section id="impact" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image collage */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={event4} 
                    alt="Impact Event 1" 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl bg-google-blue p-6 text-primary-foreground">
                  <div className="text-4xl font-bold">{students}+</div>
                  <div className="text-sm opacity-90">Students Impacted</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={event8} 
                    alt="Impact Event 2" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={event9} 
                    alt="Impact Event 3" 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Creating <span className="gradient-text">Real Change</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Recognized by Cabinet Ministers & State Governments for our youth-driven model.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-card rounded-xl p-4 shadow-md border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Supported By</h3>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <span 
                    key={partner}
                    className="px-3 py-1.5 text-sm bg-card border border-border rounded-full hover:border-primary/30 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Road ahead */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border/50 shadow-sm">
              <h3 className="text-lg font-bold mb-3">The Road Ahead</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-bold text-google-blue">100+</span>
                  <span className="text-muted-foreground ml-1">Schools by 2025</span>
                </div>
                <div>
                  <span className="font-bold text-google-red">1,00,000</span>
                  <span className="text-muted-foreground ml-1">Youth by 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
