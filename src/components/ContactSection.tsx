
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">{t('Entre em Contacto')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark">
            {t('Estamos Aqui Para Ajudar')}
          </h2>
          <p className="text-brand-gray text-lg max-w-3xl mx-auto">
            {t('Tem questões ou precisa de assistência? Entre em contacto connosco.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 reveal-on-scroll">
            <form className="bg-white rounded-2xl shadow-sm p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-brand-gray-dark font-medium mb-2">{t('Nome')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-gray-dark font-medium mb-2">{t('Email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                    placeholder="joao@exemplo.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-gray-dark font-medium mb-2">{t('Mensagem')}</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder={t('Como podemos ajudar?')}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-[1.03]"
              >
                {t('Enviar Mensagem')}
              </button>
            </form>
          </div>
          
          <div className="lg:col-span-2 reveal-on-scroll">
            <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
              <h3 className="text-2xl font-bold text-brand-gray-dark mb-6">
                {t('Informações de Contacto')}
              </h3>
              
              <div className="flex flex-col space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">{t('Localização')}</h4>
                    <p className="text-brand-gray">{t('Lisboa, Portugal')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <rect x="9" y="2" width="6" height="6"></rect>
                      <polyline points="16 16 12 20 8 16"></polyline>
                      <path d="M12 10v10"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">Email</h4>
                    <a href="mailto:info@14u.pt" className="text-brand-blue hover:underline">info@14u.pt</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">Website</h4>
                    <a href="https://www.14u.pt" className="text-brand-blue hover:underline">www.14u.pt</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
