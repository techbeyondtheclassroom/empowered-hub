import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, Target, Rocket, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import event6 from '@/assets/event-6.png';

const VisionMissionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-google-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-google-green/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Vision & <span className="gradient-text">Mission</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Cards */}
          <div className="space-y-6">
            {/* Vision Card */}
            <Card 
              className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-google-blue/30 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="w-14 h-14 rounded-xl bg-google-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe in a world where every young person and woman — no matter their 
                  background — has the confidence, skills, and opportunities to create change 
                  that truly matters.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Confidence', 'Skills', 'Opportunities'].map((keyword) => (
                    <span 
                      key={keyword}
                      className="px-3 py-1 text-sm rounded-full bg-google-blue/10 text-google-blue font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card 
              className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-google-green/30 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-google-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="w-14 h-14 rounded-xl bg-google-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Empower young people and women to turn their ideas into meaningful, lasting change.
                </p>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border/50 flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-google-red shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">On-Ground Impact</h4>
                      <p className="text-xs text-muted-foreground">Hands-on projects and upskilling workshops</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border/50 flex items-start gap-3">
                    <Globe className="w-5 h-5 text-google-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Leadership Development</h4>
                      <p className="text-xs text-muted-foreground">Dialogues, summits, and mentorship</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image side */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={event6} 
                alt="Vision and Mission" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-xl border border-border/50">
              <p className="text-sm font-medium text-muted-foreground">Building a</p>
              <p className="text-lg font-bold gradient-text">Leadership Ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
