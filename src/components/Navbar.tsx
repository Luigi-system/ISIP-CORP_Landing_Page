import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png';

const Navbar = () => {
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

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Unidades', href: '/unidades' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-lg shadow-lg py-1' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img src={logo} alt="ISIP Logo" className="h-10 w-auto" />
            <span className="text-3xl font-bold text-white tracking-tighter leading-none">
              ISIP
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors tracking-wide uppercase ${pathname === link.href ? 'text-isip-cyan' : 'text-white/80 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="bg-isip-cyan hover:bg-isip-cyan/90 text-white py-3 px-6 rounded-sm text-sm font-bold flex items-center space-x-3 transition-all duration-300"
              >
                <PhoneCall size={18} />
                <span>Contáctanos</span>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-isip-dark shadow-xl absolute top-full left-0 w-full border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-3 rounded-md text-base font-semibold transition-all ${pathname === link.href ? 'text-isip-cyan bg-white/5' : 'text-white/90 hover:text-isip-cyan hover:bg-white/5'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="block px-3 py-4 text-isip-cyan font-bold uppercase tracking-wider border-t border-white/10 mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
