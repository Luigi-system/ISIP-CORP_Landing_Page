import { Link } from 'react-router-dom';
import { Globe, Info, Mail } from 'lucide-react';
import footerLogo from '../assets/main/logo_white.png';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-10 pb-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-12 mb-10 items-start">
          {/* Brand Section - Takes 5 columns on large screens */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center space-x-3">
              <img src={footerLogo} alt="ISIP Logo" className="h-9 w-auto" />
              <h4 className="text-2xl font-black tracking-tighter">ISIP</h4>
            </div>
            <p className="text-gray-400 leading-snug text-xs lg:text-sm max-w-sm lg:max-w-none">
              Soluciones integrales en química especializada para la industria peruana. Calidad, innovación y compromiso con la excelencia operativa.
            </p>
            {/* Socials visible only on mobile here, moved to bottom on desktop */}
            <div className="flex lg:hidden space-x-3 pt-2">
              {[Globe, Info, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2.5 bg-white/5 hover:bg-isip-cyan/20 hover:text-isip-cyan rounded-full transition-all duration-300 border border-white/5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections - Takes 7 columns total on large screens */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h4 className="text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-isip-cyan/60">Enlaces</h4>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link to="/unidades" className="hover:text-white transition-colors">Unidades</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left col-span-1 lg:col-span-2">
              <h4 className="text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-isip-cyan/60">Nuestras Unidades</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-400 text-xs">
                <li><Link to="/unidades#mineria" className="hover:text-white transition-colors">Minería</Link></li>
                <li><Link to="/unidades#papel-pulpa" className="hover:text-white transition-colors">Papel y Pulpa</Link></li>
                <li><Link to="/unidades#construccion" className="hover:text-white transition-colors">Construcción</Link></li>
                <li><Link to="/unidades#tratamiento-water" className="hover:text-white transition-colors">Agua</Link></li>
                <li><Link to="/unidades#gas" className="hover:text-white transition-colors">Gas & Oil</Link></li>
                <li><Link to="/unidades#alimentos" className="hover:text-white transition-colors">Alimentos</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-500 text-[9px] uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-6 lg:mb-0">
            <p className="mb-4 lg:mb-0 opacity-50">© 2026 Integral Solutions for Industrial Processes S.A.C.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>

          {/* Desktop Socials */}
          <div className="hidden lg:flex space-x-4">
            {[Globe, Info, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 bg-white/[0.03] hover:bg-isip-cyan/20 hover:text-isip-cyan rounded-lg transition-all duration-300 border border-white/5">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
