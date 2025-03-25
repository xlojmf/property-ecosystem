
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroContentRef = useRef(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      const heroContent = heroContentRef.current;
      
      if (heroSection) {
        const opacity = 1 - (scrollY * 1.5) / window.innerHeight;
        heroSection.style.opacity = Math.max(opacity, 0).toString();
      }
      
      if (heroContent) {
        const translateY = scrollY * 0.3;
        heroContent.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=1920')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      
      <div 
        ref={heroContentRef}
        className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="glass-morphism p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
          <span className="inline-block text-white/90 text-sm uppercase tracking-wider mb-6 px-4 py-1">
            {t('excellence')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
            {t('transform-spaces')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {t('experts')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all transform hover:scale-[1.02]"
            >
              <a href="#contact">
                {t('contact-us')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 transition-opacity hover:opacity-80"
        aria-label="Scroll to services"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
