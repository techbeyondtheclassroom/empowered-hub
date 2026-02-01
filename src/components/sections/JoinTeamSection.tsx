import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Video, Share2, Sparkles, Rocket, Users, ArrowRight } from 'lucide-react';

const JoinTeamSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const positions = [
    { icon: Palette, title: 'Graphic Designer', color: 'bg-pink-500/10 text-pink-500' },
    { icon: Video, title: 'Video Editor', color: 'bg-purple-500/10 text-purple-500' },
    { icon: Share2, title: 'Social Media Lead', color: 'bg-blue-500/10 text-blue-500' },
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              We're Hiring Volunteers!
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Join Our <span className="text-secondary">Creative Team</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              If you believe creativity is impact and love experimenting with new formats, we want you!
            </p>
          </div>

          {/* Open positions */}
          <div 
            className={`grid md:grid-cols-3 gap-6 mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {positions.map((position, index) => (
              <Card 
                key={position.title}
                className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 rounded-2xl ${position.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <position.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-primary-foreground text-xl">{position.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div 
            className={`grid md:grid-cols-2 gap-8 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">What You'll Get</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">This Isn't For You If...</h3>
              </div>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">⚠️</span>
                  You need every idea to be fully defined before you start
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">⚠️</span>
                  You're afraid to take creative risks or receive feedback
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">⚠️</span>
                  You want "just another volunteering certificate"
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div 
            className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://lnkd.in/gwaTwkvy" target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-primary-foreground/60 mt-4">
              This isn't just another volunteering opportunity — it's a chance to create impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
