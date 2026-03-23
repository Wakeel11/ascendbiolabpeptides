import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Beaker, ShoppingCart, Menu, X, Mail, Phone, Info, HelpCircle, Package } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: 'https://ascendbiolab.com/' },
    { name: 'Shop', path: 'https://ascendbiolab.com/shop/' },
    { name: 'About Us', path: 'https://ascendbiolab.com/about-us/' },
    { name: 'FAQ', path: 'https://ascendbiolab.com/faq/' },
    { name: 'Contact Us', path: 'https://ascendbiolab.com/contact-us/' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="https://ascendbiolab.com/" className="flex items-center space-x-3 group">
              <img 
                src="https://ascendbiolab.com/wp-content/uploads/2026/03/ascend-logow-01.png" 
                alt="Ascend BioLab Logo" 
                className="h-12 w-auto brightness-0" 
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-[#0056b3] text-gray-700"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://ascendbiolab.com/shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#0056b3] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#004494] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Shop Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#0056b3] focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-800 hover:bg-gray-50 hover:text-[#0056b3] rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://ascendbiolab.com/shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#0056b3] text-white px-4 py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#004494] transition-all"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Shop Now</span>
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="https://ascendbiolab.com/wp-content/uploads/2026/03/ascend-logow-01.png" 
                alt="Ascend BioLab Logo" 
                className="h-12 w-auto" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Ascend BioLab – Advancing Science, One Discovery at a Time.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="text-[#0056b3]" />
                <span className="text-xs font-bold uppercase tracking-widest">info@ascendbiolab.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <HelpCircle size={18} className="text-[#0056b3]" />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Mon - Fri (Technical Guidance Available)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="https://ascendbiolab.com/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Home</a></li>
              <li><a href="https://ascendbiolab.com/shop/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Shop All</a></li>
              <li><a href="https://ascendbiolab.com/about-us/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Our Story</a></li>
              <li><a href="https://ascendbiolab.com/faq/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Legal Info</h4>
            <ul className="space-y-4">
              <li><a href="https://ascendbiolab.com/privacy-policy/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Privacy Policy</a></li>
              <li><a href="https://ascendbiolab.com/terms-and-conditions/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Terms & Conditions</a></li>
              <li><a href="https://ascendbiolab.com/shipping-policy/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Shipping Policy</a></li>
              <li><a href="https://ascendbiolab.com/refund-policy/" className="text-gray-300 hover:text-white text-[13px] font-bold transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-6">Stay updated with our latest research findings and product releases.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0056b3] transition-all"
              />
              <button className="bg-[#0056b3] text-white py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#004494] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Ascend BioLab. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span>Research Use Only</span>
            <span>Secure Payments</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>

        <div className="mt-12 p-8 bg-red-950/30 border border-red-900/50 rounded-2xl">
          <p className="text-[11px] text-red-400 font-bold uppercase tracking-widest leading-relaxed text-center">
            All materials provided by Ascend BioLab are strictly for research purposes only. Results and usage are the responsibility of the end user. 
            We do not promote or support the use of these products outside of a controlled laboratory environment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
