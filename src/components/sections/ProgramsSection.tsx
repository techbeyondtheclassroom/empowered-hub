import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DollarSign, Laptop, Scale, Heart, 
  Mic, Users, MessageCircle, Award,
  ArrowRight
} from 'lucide-react';
import event2 from '@/assets/event-2.png';
import event3 from '@/assets/event-3.png';

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState('current');

  const currentPrograms = [
    {
      icon: DollarSign,
      title: 'Financial Literacy',
      description: 'Workshops on different types of investment, savings, and financial planning for youth.',
      color: 'bg-green-500/10 text-green-600',
    },
    {
      icon: Laptop,
      title: 'Digital Literacy',
      description: 'Because empowerment grows when opportunity is made accessible for all through technology.',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Scale,
      title: 'Civic & Public Policy',
      description: 'Shedding light on existing but less talked about policies that affect youth.',
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      icon: Heart,
      title: "Women's Health & Hygiene",
      description: 'Awareness programs on health, hygiene, and government schemes offering support for women.',
      color: 'bg-pink-500/10 text-pink-600',
    },
  ];

  const upcomingPrograms = [
    {
      icon: Users,
      title: 'Youth Summit',
      description: 'A flagship event bringing together young changemakers from across India.',
      color: 'bg-orange-500/10 text-orange-600',
    },
    {
      icon: Mic,
      title: 'Beyond The Classroom Podcast',
      description: 'Conversations with leaders, policymakers, and youth champions.',
      color: 'bg-red-500/10 text-red-600',
    },
    {
      icon: MessageCircle,
      title: 'Youth Led Dialogues',
      description: 'Platform for youth voices to discuss issues that matter to their communities.',
      color: 'bg-teal-500/10 text-teal-600',
    },
    {
      icon: Award,
      title: 'Beyond The Classroom Fellowships',
      description: 'Intensive mentorship and leadership development program.',
      color: 'bg-indigo-500/10 text-indigo-600',
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background images */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <img src={event2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img src={event3} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, impactful programs designed to bridge the gap between education and employability.
          </p>
        </div>

        {/* Tabs */}
        <Tabs 
          defaultValue="current" 
          className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 bg-muted rounded-full">
            <TabsTrigger 
              value="current" 
              className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Current Programs
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming"
              className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Upcoming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {currentPrograms.map((program, index) => (
                <Card 
                  key={program.title}
                  className="group hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <program.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingPrograms.map((program, index) => (
                <Card 
                  key={program.title}
                  className="group hover:shadow-xl hover:border-secondary/30 transition-all duration-300 overflow-hidden relative"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Coming soon badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <program.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramsSection;
