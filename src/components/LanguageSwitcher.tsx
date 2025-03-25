
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center rounded-full overflow-hidden w-8 h-8 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <img
          src={language === 'pt' 
            ? "https://flagcdn.com/pt.svg" 
            : "https://flagcdn.com/gb.svg"}
          alt={language === 'pt' ? "Portuguese" : "English"}
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <button
            className={cn(
              "flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-brand-blue/10",
              language === 'pt' ? "bg-brand-blue/5" : ""
            )}
            onClick={() => toggleLanguage('pt')}
          >
            <img src="https://flagcdn.com/pt.svg" alt="Portuguese" className="w-6 h-4" />
            <span className="text-sm font-medium">Português</span>
          </button>
          <button
            className={cn(
              "flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-brand-blue/10",
              language === 'en' ? "bg-brand-blue/5" : ""
            )}
            onClick={() => toggleLanguage('en')}
          >
            <img src="https://flagcdn.com/gb.svg" alt="English" className="w-6 h-4" />
            <span className="text-sm font-medium">English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
