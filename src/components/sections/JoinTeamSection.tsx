import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Video, Share2, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import event3 from '@/assets/event-3.png';

const JoinTeamSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const positions = [
    { icon: Palette, title: 'Graphic Designer', color: 'bg-google-red/10 text-google-red' },
    { icon: Video, title: 'Video Editor', color: 'bg-google-blue/10 text-google-blue' },
    { icon: Share2, title: 'Social Media Lead', color: 'bg-google-green/10 text-google-green' },
  ];

  const benefits = [
    'Be part of a young, fast-moving team reimagining youth conversations',
    'Design bold, scroll-stopping visuals that make ideas come alive',
    'Work closely with the founding team with real creative freedom',
    'Your work will reach people and spark conversations',
  ];

  return (
    <section className="py-20 lg:py-32 gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-google-green/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            {/* Header */}
            <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-google-yellow/20 text-google-yellow text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                We're Hiring Volunteers!
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Join Our <span className="text-google-yellow">Creative Team</span>
              </h2>
              <p className="text-lg text-primary-foreground/80">
                If you believe creativity is impact and love experimenting with new formats, we want you!
              </p>
            </div>

            {/* Open positions */}
            <div 
              className={`grid grid-cols-3 gap-4 mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              {positions.map((position) => (
                <div 
                  key={position.title}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4 text-center hover:bg-primary-foreground/10 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl ${position.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <position.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium">{position.title}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div 
              className={`p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5 text-google-green" />
                <h3 className="font-semibold">What You'll Get</h3>
              </div>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-google-green mt-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              <Button 
                size="lg"
                className="bg-google-yellow hover:bg-google-yellow/90 text-accent-foreground px-8 font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://lnkd.in/gwaTwkvy" target="_blank" rel="noopener noreferrer">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-google-red/20 p-6">
              <img 
                src={event3} 
                alt="Join Our Team" 
                className="w-full h-auto object-cover rounded-xl aspect-[4/5]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground rounded-xl p-4 shadow-xl border border-border/50">
              <p className="text-sm font-medium">Join a team of</p>
              <p className="text-lg font-bold gradient-text">Changemakers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
