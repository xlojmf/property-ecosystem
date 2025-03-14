
import { useRef, useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';

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
    <section id="contact" className="py-32 px-6 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="reveal-on-scroll text-center mb-20">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">Entre em Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark tracking-tight">Fale Connosco</h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Estamos disponíveis para esclarecer todas as suas dúvidas e ajudar em qualquer questão de consultoria.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-sm p-12 max-w-2xl mx-auto transition-all duration-300 reveal-on-scroll hover-scale neo-morphism">
          <h3 className="text-2xl font-medium mb-10 text-brand-gray-dark text-center tracking-tight">Informações de Contacto</h3>
          <div className="space-y-10">
            {[
              { icon: MapPin, title: "Morada", content: ["Rua dos Choupos, n.° 158", "4100-160 Porto"] },
              { icon: Mail, title: "Email", content: ["oneforu@protonmail.com"] }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="bg-brand-gray-light/50 p-4 rounded-xl">
                  <item.icon size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-brand-gray-dark mb-2">{item.title}</h4>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-brand-gray">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
