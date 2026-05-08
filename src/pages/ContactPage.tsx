import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Map from '../components/Map';
import contactHeroBg from '../assets/contact_hero_bg.png';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative h-[70vh] flex items-center justify-center bg-isip-dark text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroBg}
            alt="Contacto Hero Background"
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[10s] animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/70 via-isip-dark/30 to-isip-dark/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
              Conectemos <span className="text-isip-cyan">Hoy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Nuestro equipo técnico está listo para analizar sus procesos y proponer soluciones químicas de alto impacto.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Reusing Form and Map */}
      <Contact />
      <Map />

    </div>
  );
};

export default ContactPage;
