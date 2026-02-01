import { Sparkles, Mail, ArrowUp, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Collaborate', href: '#collaborate' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@beyondtheclassroom.org', label: 'Email' },
  ];

  return (
    <footer className="gradient-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-xl font-bold">Beyond the Classroom</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Empowering youth with confidence, skills, and opportunities for life beyond textbooks.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://lnkd.in/gwaTwkvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  → Volunteer With Us
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@beyondtheclassroom.org"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  → Partner With Us
                </a>
              </li>
              <li>
                <a 
                  href="#programs"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  → Explore Programs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            © {new Date().getFullYear()} Beyond the Classroom. Made with 
            <Heart className="w-4 h-4 text-secondary inline" /> 
            for India's youth.
          </p>
          
          <p className="text-sm text-primary-foreground/60">
            A Nonprofit Initiative for SDGs 4, 5 & 10
          </p>

          {/* Back to top */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
