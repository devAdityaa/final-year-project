import { HeroSection } from "@/components/HeroSection";
import { ProteinForm } from "@/components/ProteinForm";
import { CovidStats } from "@/components/CovidStats";
import { InfoSection } from "@/components/InfoSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />

        <ProteinForm />


        <CovidStats />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
