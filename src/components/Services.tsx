
import { useEffect, useRef } from 'react';
import { Building, Home, Key, Map, Paintbrush, Ruler } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const cardRef = useRef(null);
  
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
      <h3 className="text-xl font-medium mb-4 text-brand-gray-dark group-hover:text-brand-blue transition-colors duration-300">{title}</h3>
      <p className="text-brand-gray leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  
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
      title: "Compra e Venda de Imóveis",
      description: "Especialistas em transações imobiliárias, garantindo processos seguros e eficientes para compradores e vendedores."
    },
    {
      icon: Key,
      title: "Administração e Arrendamento",
      description: "Gestão profissional de imóveis próprios e de terceiros, maximizando o retorno do seu investimento."
    },
    {
      icon: Building,
      title: "Administração de Condomínios",
      description: "Soluções completas para a gestão eficaz e transparente de condomínios residenciais e comerciais."
    },
    {
      icon: Map,
      title: "Apoio aos Edifícios",
      description: "Serviços de limpeza, manutenção de jardins e piscinas, garantindo o cuidado integral dos seus espaços."
    },
    {
      icon: Ruler,
      title: "Promoção Imobiliária",
      description: "Desenvolvimento de projetos imobiliários inovadores, desde a concepção até à comercialização."
    },
    {
      icon: Paintbrush,
      title: "Consultoria e Design",
      description: "Serviços especializados de consultoria, design e fotografia para valorizar e destacar os seus imóveis."
    }
  ];
  
  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="reveal-on-scroll text-center mb-20">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">Nossas Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark tracking-tight">Áreas de Atividade</h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços imobiliários para atender a todas as suas necessidades,
            desde a aquisição até à gestão e manutenção.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
