

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633167606207-d840b5070fc2')] bg-cover bg-center animate-zoom-pan">
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent animate-gradient-flow"></div>
          </div>
        </div>
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            Protein Status Predictor for COVID-19
          </h1>
          <p className="text-lg md:text-xl text-white/80 animate-slide-in">
            Advanced protein analysis tool for COVID-19 research
          </p>
        </div>
      </section>

      {/* <section className="relative py-16">
        <div className=" absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 scroll-animate hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-center mb-8">Predict Protein Status</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[280px]">
                  <Search className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="SELECT UNIPROT ID" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p1">Protein 1</SelectItem>
                  <SelectItem value="p2">Protein 2</SelectItem>
                  <SelectItem value="p3">Protein 3</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white button-hover">
                Predict
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};