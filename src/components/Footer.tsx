import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold">Brewhouse</span>
            </div>
            <p className="text-gray-400">
              Crafting exceptional coffee experiences since 2014. Where passion meets perfection in every cup.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-600 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-600 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Online Ordering</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Coffee Subscriptions</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Private Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Subscribe to our newsletter for updates and special offers.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brewhouse. All rights reserved. Made with ❤️ and lots of coffee.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;