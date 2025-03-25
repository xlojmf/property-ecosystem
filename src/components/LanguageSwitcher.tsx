
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-brand-gray-dark hover:text-brand-blue transition-colors duration-300 focus:outline-none"
        aria-label="Change language"
      >
        <Globe size={20} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
          <ul>
            <li>
              <button
                onClick={() => changeLanguage('pt')}
                className={cn(
                  "flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
                  language === 'pt' ? 'text-brand-blue font-medium' : 'text-gray-700'
                )}
              >
                <span className="mr-2">🇵🇹</span>
                Português
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage('en')}
                className={cn(
                  "flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
                  language === 'en' ? 'text-brand-blue font-medium' : 'text-gray-700'
                )}
              >
                <span className="mr-2">🇬🇧</span>
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
