import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import backgroundImage from '../assets/inicio/seccion_1x.png';


const Home = () => {
  return (
    <div id="home" className="relative h-screen flex items-center overflow-hidden">
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
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter max-w-[15ch] md:max-w-2xl">
              Química Especializada en la <span className="text-isip-cyan">Optimización</span> de Procesos
            </h1>

            <p className="text-base md:text-lg text-white mb-8 leading-snug max-w-xl font-medium opacity-90 text-justify">
              Desarrollamos y suministramos soluciones químicas de alto rendimiento para minería, petróleo, construcción y tratamiento de agua.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
              <button className="w-full sm:w-auto bg-isip-cyan hover:bg-isip-cyan/90 text-white font-bold py-3.5 px-8 rounded-sm transition-all duration-300 flex items-center justify-center space-x-3 text-sm uppercase tracking-widest group shadow-lg shadow-isip-cyan/20">
                <span>Ver Unidades de Negocio</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;
