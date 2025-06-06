
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

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
                    <p className="text-brand-gray-dark">{t('years-experience')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll">
              <span className="text-brand-blue text-sm font-medium uppercase tracking-wider">{t('about-us')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-brand-gray-dark">
                {t('who-we-are')}
              </h2>
              <p className="text-brand-gray text-lg mb-6 leading-relaxed">
                {t('about-desc-1')}
              </p>
              <p className="text-brand-gray text-lg mb-8 leading-relaxed">
                {t('about-desc-2')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">{t('professionalism')}</h4>
                    <p className="text-brand-gray text-sm">{t('professionalism-desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">{t('innovation')}</h4>
                    <p className="text-brand-gray text-sm">{t('innovation-desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">{t('excellence-value')}</h4>
                    <p className="text-brand-gray text-sm">{t('excellence-desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-gray-dark mb-1">{t('trust')}</h4>
                    <p className="text-brand-gray text-sm">{t('trust-desc')}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-[1.03] inline-block"
              >
                {t('contact-us')}
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
