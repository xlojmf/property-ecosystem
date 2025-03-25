
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

type TranslationsType = {
  [key: string]: {
    pt: string;
    en: string;
  };
};

// Translation dictionary
const translations: TranslationsType = {
  // Navbar
  'services': { pt: 'Serviços', en: 'Services' },
  'properties': { pt: 'Imóveis', en: 'Properties' },
  'about': { pt: 'Sobre Nós', en: 'About Us' },
  'contact': { pt: 'Contacto', en: 'Contact' },
  
  // Hero
  'excellence': { pt: 'Excelência em Consultoria', en: 'Excellence in Consulting' },
  'transform-spaces': { pt: 'Transformamos Espaços em Experiências Excepcionais', en: 'We Transform Spaces into Exceptional Experiences' },
  'experts': { pt: 'Somos especialistas em consultoria, oferecendo serviços completos desde a idealização até à gestão e manutenção de projetos.', en: 'We are consulting experts, offering complete services from ideation to project management and maintenance.' },
  'contact-us': { pt: 'Contacte-nos', en: 'Contact Us' },
  
  // Services
  'our-specialties': { pt: 'Nossas Especialidades', en: 'Our Specialties' },
  'activity-areas': { pt: 'Áreas de Atividade', en: 'Areas of Activity' },
  'services-desc': { pt: 'Oferecemos um conjunto completo de serviços imobiliários para atender a todas as suas necessidades, desde a aquisição até à gestão e manutenção.', en: 'We offer a complete set of real estate services to meet all your needs, from acquisition to management and maintenance.' },
  
  // Service Cards
  'buy-sell': { pt: 'Compra e Venda de Imóveis', en: 'Property Buying and Selling' },
  'buy-sell-desc': { pt: 'Especialistas em transações imobiliárias, garantindo processos seguros e eficientes para compradores e vendedores.', en: 'Specialists in real estate transactions, ensuring safe and efficient processes for buyers and sellers.' },
  'admin-rental': { pt: 'Administração e Arrendamento', en: 'Administration and Rental' },
  'admin-rental-desc': { pt: 'Gestão profissional de imóveis próprios e de terceiros, maximizando o retorno do seu investimento.', en: 'Professional management of own and third-party properties, maximizing the return on your investment.' },
  'condo-admin': { pt: 'Administração de Condomínios', en: 'Condominium Administration' },
  'condo-admin-desc': { pt: 'Soluções completas para a gestão eficaz e transparente de condomínios residenciais e comerciais.', en: 'Complete solutions for the effective and transparent management of residential and commercial condominiums.' },
  'building-support': { pt: 'Apoio aos Edifícios', en: 'Building Support' },
  'building-support-desc': { pt: 'Serviços de limpeza, manutenção de jardins e piscinas, garantindo o cuidado integral dos seus espaços.', en: 'Cleaning services, garden and pool maintenance, ensuring comprehensive care for your spaces.' },
  'real-estate-promotion': { pt: 'Promoção Imobiliária', en: 'Real Estate Development' },
  'real-estate-promotion-desc': { pt: 'Desenvolvimento de projetos imobiliários inovadores, desde a concepção até à comercialização.', en: 'Development of innovative real estate projects, from conception to commercialization.' },
  'consulting-design': { pt: 'Consultoria e Design', en: 'Consulting and Design' },
  'consulting-design-desc': { pt: 'Serviços especializados de consultoria, design e fotografia para valorizar e destacar os seus imóveis.', en: 'Specialized consulting, design and photography services to enhance and highlight your properties.' },
  
  // About
  'about-us': { pt: 'Sobre Nós', en: 'About Us' },
  'who-we-are': { pt: 'Quem Somos', en: 'Who We Are' },
  'about-desc-1': { pt: 'A 14U é uma empresa especializada em serviços imobiliários, oferecendo soluções completas que vão desde a compra e venda até à administração e manutenção de propriedades.', en: 'The 14U is a company specialized in real estate services, offering complete solutions ranging from buying and selling to property administration and maintenance.' },
  'about-desc-2': { pt: 'Com mais de 5 anos de experiência no mercado, destacamo-nos pela excelência nos serviços prestados e pelo compromisso com a satisfação dos nossos clientes.', en: 'With over 5 years of experience in the market, we stand out for excellence in the services provided and for our commitment to customer satisfaction.' },
  'years-experience': { pt: 'Anos de experiência no mercado imobiliário', en: 'Years of experience in the real estate market' },
  
  // Values
  'professionalism': { pt: 'Profissionalismo', en: 'Professionalism' },
  'professionalism-desc': { pt: 'Abordagem profissional em todos os aspectos do nosso trabalho.', en: 'Professional approach in all aspects of our work.' },
  'innovation': { pt: 'Inovação', en: 'Innovation' },
  'innovation-desc': { pt: 'Soluções criativas e inovadoras para cada projeto.', en: 'Creative and innovative solutions for each project.' },
  'excellence-value': { pt: 'Excelência', en: 'Excellence' },
  'excellence-desc': { pt: 'Compromisso com a qualidade em todos os detalhes.', en: 'Commitment to quality in every detail.' },
  'trust': { pt: 'Confiança', en: 'Trust' },
  'trust-desc': { pt: 'Relações baseadas na transparência e confiança.', en: 'Relationships based on transparency and trust.' },
  
  // Contact
  'get-in-touch': { pt: 'Entre em Contacto', en: 'Get in Touch' },
  'talk-to-us': { pt: 'Fale Connosco', en: 'Talk to Us' },
  'contact-desc': { pt: 'Estamos disponíveis para esclarecer todas as suas dúvidas e ajudar em qualquer questão de consultoria.', en: 'We are available to clarify all your questions and help with any consulting issue.' },
  'contact-info': { pt: 'Informações de Contacto', en: 'Contact Information' },
  'address': { pt: 'Morada', en: 'Address' },
  'email': { pt: 'Email', en: 'Email' },

  // Footer
  'transform-spaces-footer': { pt: 'Transformamos espaços em experiências excepcionais, oferecendo serviços imobiliários completos e personalizados.', en: 'We transform spaces into exceptional experiences, offering complete and personalized real estate services.' },
  'services-footer': { pt: 'Serviços', en: 'Services' },
  'buy-sell-footer': { pt: 'Compra e Venda', en: 'Buying and Selling' },
  'admin-rental-footer': { pt: 'Administração e Arrendamento', en: 'Administration and Rental' },
  'condo-admin-footer': { pt: 'Administração de Condomínios', en: 'Condominium Administration' },
  'building-maintenance': { pt: 'Manutenção de Edifícios', en: 'Building Maintenance' },
  'explore': { pt: 'Explorar', en: 'Explore' },
  'about-us-footer': { pt: 'Sobre Nós', en: 'About Us' },
  'projects': { pt: 'Projetos', en: 'Projects' },
  'blog': { pt: 'Blog', en: 'Blog' },
  'contact-footer': { pt: 'Contacto', en: 'Contact' },
  'rights-reserved': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
  'privacy-policy': { pt: 'Política de Privacidade', en: 'Privacy Policy' },
  'terms-of-service': { pt: 'Termos de Serviço', en: 'Terms of Service' },
  'cookies': { pt: 'Cookies', en: 'Cookies' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
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
