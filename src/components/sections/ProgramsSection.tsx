import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DollarSign, Laptop, Scale, Heart, 
  Mic, Users, MessageCircle, Award
} from 'lucide-react';
import event2 from '@/assets/event-2.png';

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState('current');

  const currentPrograms = [
    {
      icon: DollarSign,
      title: 'Financial Literacy',
      description: 'Workshops on different types of investment, savings, and financial planning for youth.',
      color: 'bg-google-green/10 text-google-green',
    },
    {
      icon: Laptop,
      title: 'Digital Literacy',
      description: 'Because empowerment grows when opportunity is made accessible for all through technology.',
      color: 'bg-google-blue/10 text-google-blue',
    },
    {
      icon: Scale,
      title: 'Civic & Public Policy',
      description: 'Shedding light on existing but less talked about policies that affect youth.',
      color: 'bg-google-red/10 text-google-red',
    },
    {
      icon: Heart,
      title: "Women's Health & Hygiene",
      description: 'Awareness programs on health, hygiene, and government schemes offering support for women.',
      color: 'bg-google-yellow/10 text-accent-foreground',
    },
  ];

  const upcomingPrograms = [
    {
      icon: Users,
      title: 'Youth Summit',
      description: 'A flagship event bringing together young changemakers from across India.',
      color: 'bg-google-red/10 text-google-red',
    },
    {
      icon: Mic,
      title: 'Beyond The Classroom Podcast',
      description: 'Conversations with leaders, policymakers, and youth champions.',
      color: 'bg-google-blue/10 text-google-blue',
    },
    {
      icon: MessageCircle,
      title: 'Youth Led Dialogues',
      description: 'Platform for youth voices to discuss issues that matter to their communities.',
      color: 'bg-google-green/10 text-google-green',
    },
    {
      icon: Award,
      title: 'Beyond The Classroom Fellowships',
      description: 'Intensive mentorship and leadership development program.',
      color: 'bg-google-yellow/10 text-accent-foreground',
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            {/* Section header */}
            <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Programs</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Practical, impactful programs designed to bridge the gap between education and employability.
              </p>
            </div>

            {/* Tabs */}
            <Tabs 
              defaultValue="current" 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full max-w-sm grid-cols-2 mb-8 p-1 bg-muted rounded-full">
                <TabsTrigger 
                  value="current" 
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  Current
                </TabsTrigger>
                <TabsTrigger 
                  value="upcoming"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  Upcoming
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="mt-0 space-y-4">
                {currentPrograms.map((program, index) => (
                  <Card 
                    key={program.title}
                    className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <program.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="upcoming" className="mt-0 space-y-4">
                {upcomingPrograms.map((program, index) => (
                  <Card 
                    key={program.title}
                    className="group hover:shadow-lg hover:border-secondary/30 transition-all duration-300 relative"
                  >
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium bg-google-yellow/20 text-accent-foreground rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <program.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right side - Image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-google-blue/10 p-6">
              <img 
                src={event2} 
                alt="Our Programs in Action" 
                className="w-full h-auto object-cover rounded-xl aspect-[4/5]"
              />
            </div>

            {/* Stats floating card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-xl border border-border/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-google-blue">4</div>
                  <div className="text-xs text-muted-foreground">Current</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-google-green">4</div>
                  <div className="text-xs text-muted-foreground">Upcoming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
