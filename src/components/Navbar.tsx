
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="group">
          <div className="flex flex-col transition-all duration-300">
            <span className="text-2xl font-bold tracking-tight text-brand-gray-dark group-hover:text-brand-blue transition-colors duration-300">14U</span>
            <span className="text-[10px] text-brand-gray tracking-widest uppercase transition-colors duration-300">{t('Consultoria')}</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8">
            {[
              [t('Serviços'), 'services'],
              [t('Sobre Nós'), 'about'],
              [t('Contacto'), 'contact']
            ].map(([item, id], index) => (
              <a 
                key={index}
                href={`#${id}`} 
                className="text-brand-gray-dark hover:text-brand-blue transition-colors duration-300 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <LanguageSwitcher />
        </div>
        
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          
          <button 
            className="text-brand-gray-dark focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white/90 backdrop-blur-xl z-50 flex flex-col p-10 transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}>
          <div className="flex justify-end">
            <button 
              className="text-brand-gray-dark focus:outline-none transition-opacity duration-300 hover:opacity-70" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-10 items-center justify-center flex-grow">
            {[
              [t('Serviços'), 'services'],
              [t('Sobre Nós'), 'about'],
              [t('Contacto'), 'contact']
            ].map(([item, id], index) => (
              <a 
                key={index}
                href={`#${id}`} 
                className="text-2xl font-medium text-brand-gray-dark transition-colors duration-300 hover:text-brand-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
