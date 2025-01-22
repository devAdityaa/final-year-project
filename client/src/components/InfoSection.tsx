import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Dna, TestTube, Network, Microscope } from "lucide-react";

export const InfoSection = () => {
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
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 scroll-animate bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Understanding Protein Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 scroll-animate group hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Dna className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What are Protein Interactions?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Protein interactions play a crucial role in COVID-19 infection. The SARS-CoV-2 virus
                  uses its spike protein to bind to human cell receptors, initiating the infection
                  process.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 scroll-animate group hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <TestTube className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Why Predict Protein Status?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Predicting protein status helps researchers understand viral mechanisms, develop
                  treatments, and identify potential drug targets for COVID-19 therapy.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 scroll-animate group hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Network className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Network Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Network analysis metrics like betweenness and closeness help identify key proteins
                  in the COVID-19 infection pathway and potential therapeutic targets.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 scroll-animate group hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-rose-100 rounded-lg group-hover:bg-rose-200 transition-colors">
                <Microscope className="w-8 h-8 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Research Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding protein interactions has led to the development of targeted therapies
                  and vaccines against COVID-19, demonstrating the importance of protein analysis.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};