import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Brewhouse</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
              Order Online
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors w-fit">
                Order Online
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;