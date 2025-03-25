
import { useEffect, useRef } from 'react';
import { Building, Home, Key, Map, Paintbrush, Ruler } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceCard = ({ icon: Icon, titleKey, descriptionKey, delay = 0 }) => {
  const cardRef = useRef(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className="reveal-on-scroll bg-white rounded-2xl p-8 shadow-sm hover-scale border border-gray-50 group"
    >
      <div className="mb-6 bg-brand-gray-light/50 p-5 rounded-xl inline-flex group-hover:bg-brand-blue/5 transition-colors duration-500">
        <Icon size={24} className="text-brand-blue" />
      </div>
      <h3 className="text-xl font-medium mb-4 text-brand-gray-dark group-hover:text-brand-blue transition-colors duration-300">{t(titleKey)}</h3>
      <p className="text-brand-gray leading-relaxed">{t(descriptionKey)}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      icon: Home,
      titleKey: 'buy-sell',
      descriptionKey: 'buy-sell-desc'
    },
    {
      icon: Key,
      titleKey: 'admin-rental',
      descriptionKey: 'admin-rental-desc'
    },
    {
      icon: Building,
      titleKey: 'condo-admin',
      descriptionKey: 'condo-admin-desc'
    },
    {
      icon: Map,
      titleKey: 'building-support',
      descriptionKey: 'building-support-desc'
    },
    {
      icon: Ruler,
      titleKey: 'real-estate-promotion',
      descriptionKey: 'real-estate-promotion-desc'
    },
    {
      icon: Paintbrush,
      titleKey: 'consulting-design',
      descriptionKey: 'consulting-design-desc'
    }
  ];
  
  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="reveal-on-scroll text-center mb-20">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">{t('our-specialties')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark tracking-tight">{t('activity-areas')}</h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            {t('services-desc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
