import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Quote, Target, Users, Globe } from 'lucide-react';
import aboutHero from '@/assets/about-hero.jpg';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const sdgBadges = [
    { number: 4, title: 'Quality Education', color: 'bg-google-blue' },
    { number: 5, title: 'Gender Equality', color: 'bg-google-red' },
    { number: 10, title: 'Reduced Inequalities', color: 'bg-google-green' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <Badge variant="outline" className="border-primary/30 text-primary">
              Who We Are
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Empowering Youth
              <span className="block gradient-text">Across India</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Beyond the Classroom, we see education not just as what's taught, but what's lived — 
              confidence, skills, and opportunities that prepare students for life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As a nonprofit organization, we work to empower students across India with the tools 
              they need to thrive in school, work, and life. Through initiatives like workshops, 
              camps, and digital learning platforms, we aim to equip the next generation of 
              changemakers with employability skills, critical thinking, and self-belief.
            </p>

            {/* Quote */}
            <div className="relative pl-6 border-l-4 border-primary/50 py-4 bg-primary/5 rounded-r-lg">
              <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary bg-background rounded-full p-1" />
              <p className="text-foreground font-medium italic">
                "Every student we mentor brings us closer to our mission: a world where every 
                young person can access education, opportunity, and empowerment."
              </p>
            </div>

            {/* SDG Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {sdgBadges.map((sdg) => (
                <div 
                  key={sdg.number}
                  className={`${sdg.color} text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 
                    hover:scale-105 transition-transform duration-300 cursor-default shadow-md`}
                >
                  <span className="font-bold">SDG {sdg.number}</span>
                  <span className="text-sm opacity-90">{sdg.title}</span>
                </div>
              ))}
            </div>

            {/* Key points */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: Target, label: 'Mission-Driven', color: 'text-google-blue' },
                { icon: Users, label: 'Youth-Focused', color: 'text-google-red' },
                { icon: Globe, label: 'Pan-India Reach', color: 'text-google-green' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-3 rounded-lg bg-muted border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <item.icon className={`w-6 h-6 ${item.color} mb-2`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutHero} 
                alt="Beyond the Classroom Workshop Session" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-lg">1500+</div>
                  <div className="text-sm text-muted-foreground">Students Impacted</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-google-yellow/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-google-blue/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
