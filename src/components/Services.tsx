
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">{t('Áreas de Atuação')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark">
            {t('Nossos Serviços')}
          </h2>
          <p className="text-brand-gray text-lg max-w-3xl mx-auto">
            {t('Oferecemos um conjunto completo de serviços para atender às suas necessidades imobiliárias.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: t('Compra e Venda'),
              description: t('Assessoria especializada para compra e venda de imóveis, garantindo as melhores condições e segurança jurídica.'),
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              )
            },
            {
              title: t('Administração de Propriedades'),
              description: t('Gestão completa de imóveis para proprietários, incluindo manutenção, cobrança de rendas e atendimento aos inquilinos.'),
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              )
            },
            {
              title: t('Consultoria de Investimentos'),
              description: t('Análise e orientação para investimentos imobiliários, com foco em maximizar retornos e minimizar riscos.'),
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              )
            },
            {
              title: t('Avaliação de Imóveis'),
              description: t('Avaliação profissional e detalhada do valor de mercado de imóveis, baseada em metodologias reconhecidas.'),
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              )
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="reveal-on-scroll bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full"
            >
              <div className="bg-brand-blue/10 p-3 rounded-full w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-gray-dark mb-4">
                {service.title}
              </h3>
              
              <p className="text-brand-gray flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
