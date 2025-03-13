
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-brand-gray-dark">14U</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#services" className="text-brand-gray-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Serviços
            </a>
            <a href="#properties" className="text-brand-gray-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Imóveis
            </a>
            <a href="#about" className="text-brand-gray-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Sobre Nós
            </a>
            <a href="#contact" className="text-brand-gray-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Contacto
            </a>
          </nav>
        </div>
        
        <button 
          className="md:hidden text-brand-gray-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col p-10 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex justify-end">
            <button 
              className="text-brand-gray-dark focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-8 items-center justify-center flex-grow">
            <a 
              href="#services" 
              className="text-2xl font-medium text-brand-gray-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#properties" 
              className="text-2xl font-medium text-brand-gray-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Imóveis
            </a>
            <a 
              href="#about" 
              className="text-2xl font-medium text-brand-gray-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#contact" 
              className="text-2xl font-medium text-brand-gray-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
