
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight text-white">14U</span>
                <span className="text-xs text-gray-400 tracking-widest uppercase">{t('Consultoria')}</span>
              </div>
            </a>
            
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              {t('A 14U é uma empresa especializada em serviços imobiliários, oferecendo soluções completas que vão desde a compra e venda até à administração e manutenção de propriedades.')}
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              
              <a href="#" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z"></path>
                </svg>
              </a>
              
              <a href="#" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('Nossos Serviços')}</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('Compra e Venda')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('Administração de Propriedades')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('Consultoria de Investimentos')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('Avaliação de Imóveis')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('Links Rápidos')}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('Início')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('Serviços')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('Sobre Nós')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('Contacto')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 14U. {t('Todos os direitos reservados')}.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
