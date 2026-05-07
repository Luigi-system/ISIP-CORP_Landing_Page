import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import backgroundImage from '../assets/1g.png';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={backgroundImage}
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white leading-none mb-8 tracking-tighter max-w-4xl">
              Química Especializada en la <br />
              <span className="text-isip-cyan italic">Optimización</span> de Procesos
            </h1>

            <p className="text-base md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
              Desarrollamos y suministramos soluciones químicas de alto rendimiento para minería, petróleo, construcción y tratamiento de agua.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-isip-cyan hover:bg-isip-cyan/90 text-white font-bold py-5 px-10 rounded-sm transition-all duration-300 flex items-center justify-center space-x-3 text-base uppercase tracking-widest group">
                <span>Ver Unidades de Negocio</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Mouse) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20">
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-isip-cyan rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
