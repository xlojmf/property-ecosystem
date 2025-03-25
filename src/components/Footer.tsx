import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">14U</span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">Consultoria</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
              Transformamos espaços em experiências excepcionais, oferecendo serviços imobiliários completos e personalizados.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 hover-scale"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-tight">Serviços</h3>
            <ul className="space-y-5">
              {["Compra e Venda", "Administração e Arrendamento", "Administração de Condomínios", "Manutenção de Edifícios"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-tight">Explorar</h3>
            <ul className="space-y-5">
              {["Sobre Nós", "Imóveis", "Projetos", "Blog"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-tight">Contacto</h3>
            <ul className="space-y-5 text-gray-400">
              <li>Rua dos Choupos, n.° 158</li>
              <li>4100-160 Porto</li>
              <li>oneforu@protonmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} 14U. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            {["Política de Privacidade", "Termos de Serviço", "Cookies"].map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
