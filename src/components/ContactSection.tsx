
import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
      alert('Mensagem enviada com sucesso!');
    }, 1500);
  };
  
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl shadow-sm p-8 transition-all duration-300 reveal-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-brand-gray-dark">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all outline-none"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all outline-none"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all outline-none"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    <span>A enviar...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-3xl shadow-sm p-8 transition-all duration-300 reveal-on-scroll lg:mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-brand-gray-dark">Informações de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-gray-light p-3 rounded-xl">
                  <MapPin size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-brand-gray-dark mb-1">Morada</h4>
                  <p className="text-brand-gray">Avenida Principal, 123<br />Lisboa, 1000-000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-gray-light p-3 rounded-xl">
                  <Mail size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-brand-gray-dark mb-1">Email</h4>
                  <p className="text-brand-gray">info@14u.pt</p>
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
      </div>
    </section>
  );
};

export default ContactSection;
