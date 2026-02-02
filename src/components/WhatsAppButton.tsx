import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '+919876543210'; // Replace with actual number
  const message = 'Hello! I would like to know more about Beyond the Classroom.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success hover:bg-success/90 text-success-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 pulse-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
