
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tighter">14U</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Transformamos espaços em experiências excepcionais, oferecendo serviços imobiliários completos e personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Compra e Venda</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Administração e Arrendamento</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Administração de Condomínios</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Manutenção de Edifícios</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Explorar</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Imóveis</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Avenida Principal, 123</li>
              <li>Lisboa, 1000-000</li>
              <li>info@14u.pt</li>
              <li>+351 910 000 000</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} 14U. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
