import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProblemSection from '@/components/sections/ProblemSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import ModelSection from '@/components/sections/ModelSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import ImpactSection from '@/components/sections/ImpactSection';
import JoinTeamSection from '@/components/sections/JoinTeamSection';
import CollaborateSection from '@/components/sections/CollaborateSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <VisionMissionSection />
      <ModelSection />
      <ProgramsSection />
      <ImpactSection />
      <JoinTeamSection />
      <CollaborateSection />
      <Footer />
    </main>
  );
};

export default Index;
