import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building, Handshake, DollarSign, GraduationCap, 
  Mail, Linkedin, Instagram, Twitter, ArrowRight
} from 'lucide-react';
import event8 from '@/assets/event-8.png';

const CollaborateSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const collaborationWays = [
    {
      icon: Building,
      title: 'Host Programs',
      description: 'Bring Beyond the Classroom programs to your school or college.',
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Collaborate on skill development or leadership initiatives.',
    },
    {
      icon: DollarSign,
      title: 'Fund Our Mission',
      description: 'Support our on-ground projects through funding or resources.',
    },
    {
      icon: GraduationCap,
      title: 'Mentor Youth',
      description: 'Join as a speaker, trainer, or volunteer mentor.',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="collaborate" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img src={event8} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/95" />

      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Collaborate <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's build the future — Beyond the Classroom. We're always looking for partners 
            who share our belief that education should lead to empowerment.
          </p>
        </div>

        {/* Collaboration ways */}
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {collaborationWays.map((way, index) => (
            <Card 
              key={way.title}
              className="group hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <way.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{way.title}</h3>
                <p className="text-sm text-muted-foreground">{way.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact card */}
        <div 
          className={`max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="p-8 md:p-12 rounded-3xl gradient-primary text-primary-foreground text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Whether you're an educational institution, corporate, nonprofit, or individual mentor, 
              there's a way to create impact with us.
            </p>

            {/* Email */}
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300 mb-8"
              asChild
            >
              <a href="mailto:contact@beyondtheclassroom.org">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Closing message */}
        <div 
          className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
            "The vision is clear — to make <span className="gradient-text font-bold">employability</span> the 
            true measure of education."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
