import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

// Using the generated images
import imgPaper from '../assets/industrial_paper_pulp_1777933937959.png';
import imgWater from '../assets/water_treatment_plant_1777933952281.png';
import imgMining from '../assets/mining_operation_1777934009503.png';
import imgConst from '../assets/construction_chemicals_1777934023257.png';
import imgOil from '../assets/oil_gas_pipes_1777934036564.png';
import imgFood from '../assets/food_industry_lab_1777934049855.png';

import { Link } from 'react-router-dom';

const About = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas fórmulas para optimizar su producción.',
      icon: <Zap className="text-gray-700" size={24} />,
    },
    {
      title: 'Compromiso',
      description: 'Nos enfocamos en el éxito de nuestros clientes con servicio personalizado.',
      icon: <ShieldCheck className="text-gray-700" size={24} />,
    },
    {
      title: 'Calidad',
      description: 'Productos certificados bajo los más altos estándares internacionales.',
      icon: <CheckCircle2 className="text-gray-700" size={24} />,
    },
  ];

  const units = [
    { title: 'Pulpa & Papel', description: 'Soluciones para optimizar la producción de papel.', image: imgPaper },
    { title: 'Tratamiento de Agua', description: 'Tecnología avanzada para el tratamiento de aguas.', image: imgWater },
    { title: 'Minería', description: 'Reactivos de flotación y soluciones para procesos metalúrgicos.', image: imgMining },
    { title: 'Construcción', description: 'Aditivos químicos de alto desempeño para concreto.', image: imgConst },
    { title: 'Gas y Petróleo', description: 'Productos especializados para la exploración.', image: imgOil },
    { title: 'Industria Alimentaria', description: 'Insumos químicos de grado alimenticio.', image: imgFood },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-24 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Top Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-100 pb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 mt-1">
                {value.icon}
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-gray-700 mb-1 tracking-tight uppercase">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <Link 
            to="/nosotros"
            className="inline-flex items-center space-x-2 text-isip-cyan font-bold uppercase tracking-widest text-sm hover:text-isip-dark transition-colors group"
          >
            <span>Conocer más sobre nosotros</span>
            <div className="w-8 h-px bg-isip-cyan group-hover:w-12 group-hover:bg-isip-dark transition-all"></div>
          </Link>
        </div>

        {/* Business Units Section (Replaces About Us) */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-black text-isip-dark mb-6 leading-tight tracking-tighter uppercase">
              Nuestras Unidades de Negocio
            </h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg font-light leading-relaxed px-4 mb-8">
              Impulsamos la industria peruana con soluciones químicas de vanguardia adaptadas a las necesidades específicas de cada mercado.
            </p>
            <Link 
              to="/unidades"
              className="bg-isip-dark text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-isip-cyan transition-colors"
            >
              Ver Todas las Unidades
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isSectionHovered ? 1 : 0 }}
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-5 rounded-full bg-isip-dark/10 backdrop-blur-xl border border-isip-dark/10 hover:bg-isip-dark hover:text-white transition-all duration-500 shadow-xl hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} className="md:w-8 md:h-8" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isSectionHovered ? 1 : 0 }}
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-5 rounded-full bg-isip-dark/10 backdrop-blur-xl border border-isip-dark/10 hover:bg-isip-dark hover:text-white transition-all duration-500 shadow-xl hidden md:flex"
            aria-label="Siguiente"
          >
            <ChevronRight size={28} className="md:w-8 md:h-8" />
          </motion.button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-10 hide-scrollbar py-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex space-x-6 md:space-x-8">
              {units.map((unit, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[260px] md:w-[340px] perspective-1000 snap-center"
                  whileHover={{ y: -10 }}
                >
                  <div className="group relative">
                    {/* Image Container */}
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl transition-all duration-700 border border-gray-100 relative">
                      <img
                        src={unit.image}
                        alt={unit.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-isip-dark/90 via-isip-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                      {/* Floating Info on Image */}
                      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight uppercase">
                          {unit.title}
                        </h4>
                        <p className="text-white/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                          {unit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </section>
  );
};

export default About;
