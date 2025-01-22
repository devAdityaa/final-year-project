import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProteinPredictor</h3>
            <p className="text-gray-400">
              Advanced protein analysis tool for COVID-19 research
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
 
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Details</h4>
            <p className="text-gray-400 mb-4">Final year Project</p>
            <p className="text-gray-400">Department: CSE AIML</p>
            <p className="text-gray-400">Batch: 2021-25</p>
            <p className="text-gray-400 text-xs">Names: Ankush, Anushka, Anushruto, Obaid, Debaditya</p>
           
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ProteinPredictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};