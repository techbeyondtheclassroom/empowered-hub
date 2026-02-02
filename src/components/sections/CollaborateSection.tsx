import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building, Handshake, DollarSign, GraduationCap, 
  Mail, Linkedin, Instagram, Twitter
} from 'lucide-react';
import event3 from '@/assets/event-3.png';

const CollaborateSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const collaborationWays = [
    {
      icon: Building,
      title: 'Host Programs',
      description: 'Bring Beyond the Classroom programs to your school or college.',
      color: 'bg-google-blue',
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Collaborate on skill development or leadership initiatives.',
      color: 'bg-google-red',
    },
    {
      icon: DollarSign,
      title: 'Fund Our Mission',
      description: 'Support our on-ground projects through funding or resources.',
      color: 'bg-google-yellow',
    },
    {
      icon: GraduationCap,
      title: 'Mentor Youth',
      description: 'Join as a speaker, trainer, or volunteer mentor.',
      color: 'bg-google-green',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="collaborate" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div 
            className={`relative order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-google-green/10 p-6">
              <img 
                src={event3} 
                alt="Collaborate With Us" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            {/* Floating CTA card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl max-w-xs">
              <h4 className="font-bold mb-2">Ready to Make Impact?</h4>
              <p className="text-sm opacity-90 mb-4">Join us in building the future of education.</p>
              <Button 
                size="sm"
                className="bg-background text-foreground hover:bg-background/90 w-full"
                asChild
              >
                <a href="mailto:contact@beyondtheclassroom.org">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Collaborate <span className="gradient-text">With Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build the future — Beyond the Classroom. We're always looking for partners 
              who share our belief that education should lead to empowerment.
            </p>

            {/* Collaboration ways */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {collaborationWays.map((way) => (
                <Card 
                  key={way.title}
                  className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg ${way.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <way.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{way.title}</h3>
                      <p className="text-xs text-muted-foreground">{way.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Connect with us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
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
