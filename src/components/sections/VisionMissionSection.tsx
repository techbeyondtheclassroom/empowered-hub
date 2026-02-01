import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, Target, Users, Lightbulb, Globe, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VisionMissionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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

        {/* Cards grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <Card 
            className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10 pb-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Vision</CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We believe in a world where every young person and woman — no matter their 
                background — has the confidence, skills, and opportunities to create change 
                that truly matters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our aim is to build a leadership ecosystem that sustains itself, one that 
                doesn't just celebrate individual success, but grows a community of 
                changemakers — people who think boldly, act locally, and connect globally.
              </p>

              {/* Vision keywords */}
              <div className="flex flex-wrap gap-2 pt-4">
                {['Confidence', 'Skills', 'Opportunities', 'Leadership'].map((keyword) => (
                  <span 
                    key={keyword}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </CardContent>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
          </Card>

          {/* Mission Card */}
          <Card 
            className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-secondary/30 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10 pb-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Mission</CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower young people and women to turn their ideas into 
                meaningful, lasting change. We do this in two ways:
              </p>

              {/* Two pillars */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                      <Rocket className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">On-Ground Impact Projects</h4>
                      <p className="text-sm text-muted-foreground">
                        Hands-on projects and upskilling workshops on digital literacy, 
                        financial literacy, nutritional health and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Leadership Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Youth-led community through dialogues, summits, mentorship, 
                        connecting them with leaders and policymakers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
