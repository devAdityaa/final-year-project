import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
          >
           CoVRx
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-all hover:-translate-y-0.5 ${
                isHome 
                  ? "text-blue-600 font-semibold" 
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link to="https://ffb3-2402-3a80-42fc-60f7-d165-d7f8-df48-844b.ngrok-free.app/drug-repurposing" className={`transition-all hover:-translate-y-0.5 ${
                isHome 
                  ? "text-blue-600 font-semibold" 
                  : "text-gray-600 hover:text-blue-600"
              }`}>
            Drug Repurposing
          </Link>
            <Link 
              to="https://covid19.india.gov.in/documents/" 
              target="_new"
              className={`transition-all hover:-translate-y-0.5 ${
                isHome 
                  ? "text-blue-600 font-semibold" 
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Documentation
            </Button>
            </Link>
          </nav>

          {/* Mobile navigation */}
          <div className={`
            md:hidden 
            fixed top-16 left-0 right-0 
            bg-white border-b shadow-lg
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
          `}>
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className={`transition-colors px-4 py-2 rounded-lg ${
                  isHome 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
                <a href='https://covid19.india.gov.in/documents/'>
                <Link 
              to="https://covid19.india.gov.in/documents/" 
              target="_new"
              className={`transition-all hover:-translate-y-0.5 ${
                isHome 
                  ? "text-blue-600 font-semibold" 
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Documentation
              </Button>
              </Link>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};