
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Navbar
  'Serviços': { en: 'Services', pt: 'Serviços' },
  'Imóveis': { en: 'Properties', pt: 'Imóveis' },
  'Sobre Nós': { en: 'About Us', pt: 'Sobre Nós' },
  'Contacto': { en: 'Contact', pt: 'Contacto' },
  
  // Hero section
  'Consultoria': { en: 'Consulting', pt: 'Consultoria' },
  'Soluções Imobiliárias': { en: 'Real Estate Solutions', pt: 'Soluções Imobiliárias' },
  'Para Si e Para o Seu Negócio': { en: 'For You and Your Business', pt: 'Para Si e Para o Seu Negócio' },
  'Descubra como os nossos serviços de consultoria imobiliária podem alavancar os seus investimentos e garantir o sucesso dos seus projetos.': 
    { en: 'Discover how our real estate consulting services can leverage your investments and ensure the success of your projects.', 
      pt: 'Descubra como os nossos serviços de consultoria imobiliária podem alavancar os seus investimentos e garantir o sucesso dos seus projetos.' },
  'Explorar Serviços': { en: 'Explore Services', pt: 'Explorar Serviços' },
  'Fale Connosco': { en: 'Contact Us', pt: 'Fale Connosco' },
  
  // Services section
  'Áreas de Atuação': { en: 'Areas of Expertise', pt: 'Áreas de Atuação' },
  'Nossos Serviços': { en: 'Our Services', pt: 'Nossos Serviços' },
  'Oferecemos um conjunto completo de serviços para atender às suas necessidades imobiliárias.': 
    { en: 'We offer a complete set of services to meet your real estate needs.', 
      pt: 'Oferecemos um conjunto completo de serviços para atender às suas necessidades imobiliárias.' },
  'Compra e Venda': { en: 'Buying and Selling', pt: 'Compra e Venda' },
  'Assessoria especializada para compra e venda de imóveis, garantindo as melhores condições e segurança jurídica.': 
    { en: 'Specialized advice for buying and selling properties, ensuring the best conditions and legal security.', 
      pt: 'Assessoria especializada para compra e venda de imóveis, garantindo as melhores condições e segurança jurídica.' },
  'Administração de Propriedades': { en: 'Property Management', pt: 'Administração de Propriedades' },
  'Gestão completa de imóveis para proprietários, incluindo manutenção, cobrança de rendas e atendimento aos inquilinos.': 
    { en: 'Complete property management for owners, including maintenance, rent collection, and tenant service.', 
      pt: 'Gestão completa de imóveis para proprietários, incluindo manutenção, cobrança de rendas e atendimento aos inquilinos.' },
  'Consultoria de Investimentos': { en: 'Investment Consulting', pt: 'Consultoria de Investimentos' },
  'Análise e orientação para investimentos imobiliários, com foco em maximizar retornos e minimizar riscos.': 
    { en: 'Analysis and guidance for real estate investments, focusing on maximizing returns and minimizing risks.', 
      pt: 'Análise e orientação para investimentos imobiliários, com foco em maximizar retornos e minimizar riscos.' },
  'Avaliação de Imóveis': { en: 'Property Valuation', pt: 'Avaliação de Imóveis' },
  'Avaliação profissional e detalhada do valor de mercado de imóveis, baseada em metodologias reconhecidas.': 
    { en: 'Professional and detailed assessment of the market value of properties, based on recognized methodologies.', 
      pt: 'Avaliação profissional e detalhada do valor de mercado de imóveis, baseada em metodologias reconhecidas.' },
    
  // About section
  'Quem Somos': { en: 'Who We Are', pt: 'Quem Somos' },
  'A 14U é uma empresa especializada em serviços imobiliários, oferecendo soluções completas que vão desde a compra e venda até à administração e manutenção de propriedades.': 
    { en: '14U is a company specialized in real estate services, offering complete solutions from buying and selling to property administration and maintenance.', 
      pt: 'A 14U é uma empresa especializada em serviços imobiliários, oferecendo soluções completas que vão desde a compra e venda até à administração e manutenção de propriedades.' },
  'Com mais de 5 anos de experiência no mercado, destacamo-nos pela excelência nos serviços prestados e pelo compromisso com a satisfação dos nossos clientes.': 
    { en: 'With over 5 years of experience in the market, we stand out for the excellence in the services provided and the commitment to customer satisfaction.', 
      pt: 'Com mais de 5 anos de experiência no mercado, destacamo-nos pela excelência nos serviços prestados e pelo compromisso com a satisfação dos nossos clientes.' },
  'Anos de experiência no mercado imobiliário': 
    { en: 'Years of experience in the real estate market', 
      pt: 'Anos de experiência no mercado imobiliário' },
  'Profissionalismo': { en: 'Professionalism', pt: 'Profissionalismo' },
  'Abordagem profissional em todos os aspectos do nosso trabalho.': 
    { en: 'Professional approach in all aspects of our work.', 
      pt: 'Abordagem profissional em todos os aspectos do nosso trabalho.' },
  'Inovação': { en: 'Innovation', pt: 'Inovação' },
  'Soluções criativas e inovadoras para cada projeto.': 
    { en: 'Creative and innovative solutions for each project.', 
      pt: 'Soluções criativas e inovadoras para cada projeto.' },
  'Excelência': { en: 'Excellence', pt: 'Excelência' },
  'Compromisso com a qualidade em todos os detalhes.': 
    { en: 'Commitment to quality in every detail.', 
      pt: 'Compromisso com a qualidade em todos os detalhes.' },
  'Confiança': { en: 'Trust', pt: 'Confiança' },
  'Relações baseadas na transparência e confiança.': 
    { en: 'Relationships based on transparency and trust.', 
      pt: 'Relações baseadas na transparência e confiança.' },
      
  // Contact section
  'Entre em Contacto': { en: 'Get in Touch', pt: 'Entre em Contacto' },
  'Estamos Aqui Para Ajudar': { en: 'We Are Here to Help', pt: 'Estamos Aqui Para Ajudar' },
  'Tem questões ou precisa de assistência? Entre em contacto connosco.': 
    { en: 'Have questions or need assistance? Get in touch with us.', 
      pt: 'Tem questões ou precisa de assistência? Entre em contacto connosco.' },
  'Nome': { en: 'Name', pt: 'Nome' },
  'Email': { en: 'Email', pt: 'Email' },
  'Mensagem': { en: 'Message', pt: 'Mensagem' },
  'Enviar Mensagem': { en: 'Send Message', pt: 'Enviar Mensagem' },
  'Localização': { en: 'Location', pt: 'Localização' },
  'Lisboa, Portugal': { en: 'Lisbon, Portugal', pt: 'Lisboa, Portugal' },
  'Como podemos ajudar?': { en: 'How can we help?', pt: 'Como podemos ajudar?' },
  'Informações de Contacto': { en: 'Contact Information', pt: 'Informações de Contacto' },
  
  // Footer
  'Todos os direitos reservados': { en: 'All rights reserved', pt: 'Todos os direitos reservados' },
  'Links Rápidos': { en: 'Quick Links', pt: 'Links Rápidos' },
  'Início': { en: 'Home', pt: 'Início' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    if (translations[key as keyof typeof translations]) {
      return translations[key as keyof typeof translations][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
