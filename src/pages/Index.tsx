
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check for elements in view on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <div id="properties" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">Empreendimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-10 text-brand-gray-dark">Imóveis em Destaque</h2>
          
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[600px] mb-10">
            <img 
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=1920" 
              alt="Luxury Building" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end text-left p-8 md:p-12">
              <span className="bg-brand-blue/90 text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                Empreendimento em Destaque
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Edifício Horizonte</h3>
              <p className="text-white/90 mb-6 max-w-xl">
                Um conceito inovador de habitação urbana, com acabamentos premium e vistas deslumbrantes sobre a cidade.
              </p>
              <a 
                href="#" 
                className="bg-white hover:bg-white/90 text-brand-gray-dark px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 w-fit"
              >
                Ver Detalhes
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group reveal-on-scroll">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 1 ? '1493397212122-2b85dda8106b' : index === 2 ? '1460574283810-2aab119d8511' : '1721322800607-8c38375eef04'}?auto=format&fit=crop&q=80&w=800`} 
                    alt={`Property ${index}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-brand-blue text-xs font-medium uppercase tracking-wider">
                    {index === 1 ? 'Apartamento' : index === 2 ? 'Escritório' : 'Moradia'}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-1 text-brand-gray-dark">
                    {index === 1 ? 'Apartamento T3 Centro' : index === 2 ? 'Escritório Moderno' : 'Moradia de Luxo'}
                  </h3>
                  <p className="text-brand-gray line-clamp-2 mb-4">
                    {index === 1 
                      ? 'Espaço moderno e funcional, localizado no centro da cidade.' 
                      : index === 2 
                        ? 'Espaço corporativo premium com acabamentos de alto padrão.' 
                        : 'Vivenda com jardim, piscina e acabamentos de luxo.'}
                  </p>
                  <div className="flex justify-between items-end">
                    <span className="text-brand-gray-dark font-bold">
                      {index === 1 ? '€350,000' : index === 2 ? '€2,500/mês' : '€750,000'}
                    </span>
                    <a 
                      href="#" 
                      className="text-brand-blue hover:text-brand-blue-light underline text-sm font-medium transition-colors"
                    >
                      Mais Detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Services />
      
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80&w=1920" 
                    alt="Modern Building" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
                  <div className="flex items-center justify-center gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      <span className="text-3xl font-bold text-brand-blue">5+</span>
                    </div>
                    <p className="text-brand-gray-dark">Anos de experiência no mercado imobiliário</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll">
              <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">Sobre Nós</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark">
                Quem Somos
              </h2>
              <p className="text-brand-gray text-lg mb-6 leading-relaxed">
                A 14U é uma empresa especializada em serviços imobiliários, oferecendo soluções completas que vão desde a compra e venda até à administração e manutenção de propriedades.
              </p>
              <p className="text-brand-gray text-lg mb-8 leading-relaxed">
                Com mais de 5 anos de experiência no mercado, destacamo-nos pela excelência nos serviços prestados e pelo compromisso com a satisfação dos nossos clientes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">Profissionalismo</h4>
                    <p className="text-brand-gray text-sm">Abordagem profissional em todos os aspectos do nosso trabalho.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">Inovação</h4>
                    <p className="text-brand-gray text-sm">Soluções criativas e inovadoras para cada projeto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">Excelência</h4>
                    <p className="text-brand-gray text-sm">Compromisso com a qualidade em todos os detalhes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">Confiança</h4>
                    <p className="text-brand-gray text-sm">Relações baseadas na transparência e confiança.</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-[1.03] inline-block"
              >
                Fale Connosco
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
