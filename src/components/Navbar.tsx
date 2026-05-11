import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/main/logo.png';

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Unidades', href: '/unidades' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled || pathname === '/contacto' ? 'bg-isip-dark/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <img src={logo} alt="ISIP Logo" className="h-9 w-auto transition-transform group-hover:scale-110" />
              <span className="text-2xl font-black text-white tracking-tighter leading-none">
                ISIP
              </span>
            </Link>

            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-bold transition-all uppercase tracking-widest relative group ${pathname === link.href ? 'text-isip-cyan' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-isip-cyan transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                ))}
                <button
                  onClick={onContactClick}
                  className="bg-isip-cyan hover:bg-isip-cyan/90 text-white py-2.5 px-6 rounded-full text-xs font-black flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-isip-cyan/20"
                >
                  <PhoneCall size={16} />
                  <span>Contáctanos</span>
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-white hover:text-isip-cyan transition-colors"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Moved out of nav for better stacking) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed inset-y-0 left-0 w-[240px] bg-isip-dark shadow-2xl z-[201] flex flex-col border-r border-white/10"
            >
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/10">
                <div className="flex items-center space-x-2">
                  <img src={logo} alt="ISIP Logo" className="h-8 w-auto" />
                  <span className="text-xl font-black text-white tracking-tighter">ISIP</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white/50 hover:text-white transition-colors border border-white/10 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow py-6 px-4 overflow-y-auto">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block px-5 py-2.5 rounded-xl text-base font-black transition-all uppercase tracking-tight border ${pathname === link.href ? 'text-isip-cyan border-isip-cyan/30 bg-isip-cyan/10 shadow-lg shadow-isip-cyan/5' : 'text-white/60 border-transparent hover:text-white hover:bg-white/5'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-5 border-t border-white/10 bg-black/30">
                <button
                  className="w-full bg-isip-cyan hover:bg-isip-cyan/90 text-white py-3.5 px-6 rounded-xl font-black flex items-center justify-center space-x-3 transition-all duration-300 uppercase tracking-widest text-xs shadow-xl shadow-isip-cyan/20"
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick?.();
                  }}
                >
                  <PhoneCall size={18} />
                  <span>Contáctanos</span>
                </button>
                <div className="mt-4 flex justify-center space-x-3 opacity-20">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <p className="text-[9px] text-white/10 mt-4 text-center uppercase tracking-[0.4em] font-black">ISIP CORP • 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
