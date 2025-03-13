
import { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
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
  
  return (
    <section id="contact" className="py-24 px-6 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="reveal-on-scroll text-center mb-16">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">Entre em Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark">Fale Connosco</h2>
          <p className="text-brand-gray text-lg max-w-3xl mx-auto">
            Estamos disponíveis para esclarecer todas as suas dúvidas e ajudar em qualquer questão imobiliária.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-sm p-8 max-w-2xl mx-auto transition-all duration-300 reveal-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-brand-gray-dark text-center">Informações de Contacto</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-brand-gray-light p-3 rounded-xl">
                <MapPin size={24} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-medium text-brand-gray-dark mb-1">Morada</h4>
                <p className="text-brand-gray">Rua dos Choupos, n.° 158<br />4100-160 Porto</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-brand-gray-light p-3 rounded-xl">
                <Mail size={24} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-medium text-brand-gray-dark mb-1">Email</h4>
                <p className="text-brand-gray">oneforu@protonmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-brand-gray-light p-3 rounded-xl">
                <Phone size={24} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-medium text-brand-gray-dark mb-1">Telefone</h4>
                <p className="text-brand-gray">+351 910 000 000</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-medium text-brand-gray-dark mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2 text-brand-gray">
                <p className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado</span>
                  <span>10:00 - 15:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
