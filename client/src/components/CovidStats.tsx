import { Card } from "@/components/ui/card";

export const CovidStats = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">COVID-19 Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Global Cases</h3>
            <p className="text-3xl font-bold text-blue-600">700M+</p>
            <p className="text-sm text-gray-500 mt-2">Total confirmed cases worldwide</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Protein Interactions</h3>
            <p className="text-3xl font-bold text-blue-600">332</p>
            <p className="text-sm text-gray-500 mt-2">Known viral protein interactions</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
            <p className="text-3xl font-bold text-blue-600">50K+</p>
            <p className="text-sm text-gray-500 mt-2">Published COVID-19 studies</p>
          </Card>
        </div>
      </div>
    </section>
  );
};