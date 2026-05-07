import { Link } from 'react-router-dom';
import { ArrowUp, Globe, Info, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold">ISIP<span className="text-isip-cyan">.</span></h4>
            <p className="text-gray-400 leading-relaxed">
              Soluciones integrales en química especializada para la industria peruana. Calidad, innovación y compromiso.
            </p>
            <div className="flex space-x-4">
              {[Globe, Info, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-white/5 hover:bg-isip-cyan/20 hover:text-isip-cyan rounded-full transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-isip-cyan transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-isip-cyan transition-colors">Nosotros</Link></li>
              <li><Link to="/unidades" className="hover:text-isip-cyan transition-colors">Unidades</Link></li>
              <li><Link to="/contacto" className="hover:text-isip-cyan transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Nuestros Sectores</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-isip-cyan transition-colors">Minería</a></li>
              <li><a href="#" className="hover:text-isip-cyan transition-colors">Papel y Pulpa</a></li>
              <li><a href="#" className="hover:text-isip-cyan transition-colors">Construcción</a></li>
              <li><a href="#" className="hover:text-isip-cyan transition-colors">Tratamiento de Agua</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Suscripción</h4>
            <p className="text-gray-400 mb-6">Reciba nuestras últimas novedades y boletines técnicos.</p>
            <div className="flex">
              <input type="email" className="bg-white/5 border border-white/10 px-4 py-3 rounded-l-xl w-full outline-none focus:border-isip-cyan transition-colors" placeholder="Su correo" />
              <button className="bg-isip-cyan px-4 py-3 rounded-r-xl hover:bg-isip-cyan/90 transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Integral Solutions for Industrial Processes S.A.C. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 bg-isip-cyan text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
