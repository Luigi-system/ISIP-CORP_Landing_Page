import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Using the generated images
import imgPaper from '../assets/industrial_paper_pulp_1777933937959.png';
import imgWater from '../assets/water_treatment_plant_1777933952281.png';
import imgMining from '../assets/mining_operation_1777934009503.png';
import imgConst from '../assets/construction_chemicals_1777934023257.png';
import imgOil from '../assets/oil_gas_pipes_1777934036564.png';
import imgFood from '../assets/food_industry_lab_1777934049855.png';

const Services = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      id="units"
      className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-isip-dark text-white relative overflow-hidden"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-5 tracking-tight uppercase leading-tight">
            En ISIP nos enorgullece ser un socio útil y valioso para nuestros clientes y comunidades.
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionHovered ? 1 : 0 }}
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-5 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 hover:bg-white hover:text-isip-cyan transition-all duration-500 shadow-2xl hidden md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft size={28} className="md:w-9 md:h-9" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionHovered ? 1 : 0 }}
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-5 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 hover:bg-white hover:text-isip-cyan transition-all duration-500 shadow-2xl hidden md:flex"
          aria-label="Siguiente"
        >
          <ChevronRight size={28} className="md:w-9 md:h-9" />
        </motion.button>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-10 hide-scrollbar py-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-6 md:space-x-10 px-6 md:px-10">
            {units.map((unit, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[240px] md:w-[320px] perspective-1000 snap-center"
                whileHover={{ y: -10 }}
              >
                <div className="group relative">
                  {/* Square-ish Image Container */}
                  <div className="aspect-[3/3.8] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl transition-all duration-700 group-hover:shadow-isip-dark/40 border-4 border-white/10 relative">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                    {/* Floating Info on Image */}
                    <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white tracking-tight">
                        {unit.title}
                      </h4>
                      <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
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

export default Services;
