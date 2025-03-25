
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-brand-gray-dark mb-6">
              <span className="text-brand-blue block">14U {t('Consultoria')}</span>
              {t('Soluções Imobiliárias')} <br />
              {t('Para Si e Para o Seu Negócio')}
            </h1>
            
            <p className="text-brand-gray text-lg md:text-xl mb-10 leading-relaxed">
              {t('Descubra como os nossos serviços de consultoria imobiliária podem alavancar os seus investimentos e garantir o sucesso dos seus projetos.')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#services" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-[1.03]">
                {t('Explorar Serviços')}
              </a>
              <a href="#contact" className="bg-transparent hover:bg-gray-100 text-brand-gray-dark border border-gray-300 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-[1.03]">
                {t('Fale Connosco')}
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-brand-blue/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -right-10 bottom-10 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
              
              <div className="bg-white w-full max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504494683949-7319a9ba12d1?auto=format&fit=crop&q=80" 
                  alt="Modern Office Building" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-5 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
