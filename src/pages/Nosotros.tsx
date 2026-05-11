import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import industrialBg from '../assets/nosotros/seccion_1x.png';
import leadershipBg from '../assets/nosotros/seccion_2x.png';

const AboutPage = () => {
  const pillars = [
    {
      id: "01",
      title: "Innovación Tecnológica",
      desc: "Desarrollamos formulaciones químicas de vanguardia adaptadas a las condiciones específicas de cada proceso industrial en el país."
    },
    {
      id: "02",
      title: "Compromiso Técnico",
      desc: "Garantizamos resultados operativos y sostenibilidad en cada intervención técnica que realizamos para nuestros socios."
    },
    {
      id: "03",
      title: "Calidad Certificada",
      desc: "Rigurosos estándares de fabricación que aseguran seguridad absoluta en el manejo químico industrial de alto riesgo."
    }
  ];

  const [activePillar, setActivePillar] = useState(0);
  const [activeTab, setActiveTab] = useState<'mision' | 'vision'>('mision');

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [pillars.length]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-isip-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={industrialBg}
            alt="Fondo Industrial"
            className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[10s] animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/90 via-isip-dark/10 to-isip-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none"
          >
            Nuestra <span className="text-isip-cyan text-shadow-lg">Esencia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-normal leading-snug text-center"
          >
            Más que proveedores, somos aliados estratégicos en soluciones químicas especializadas.
            Impulsamos la eficiencia y sostenibilidad de los procesos industriales mediante innovación,
            conocimiento técnico y productos de alto rendimiento.
          </motion.p>
        </div>
      </section>

      {/* Main Vision Section - Updated with Background Image */}
      <section className="relative py-32 min-h-screen flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src={leadershipBg}
            alt="Liderazgo Industrial"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-white"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase leading-tight">
              Liderando la Química Industrial en el Perú
            </h3>
            <div className="space-y-4 md:space-y-6 text-white/80 text-base md:text-lg leading-snug font-normal text-justify">
              <p>
                En ISIP, nos dedicamos al desarrollo, fabricación y comercialización de productos químicos especializados de alto desempeño. Nuestro enfoque trasciende la simple venta de insumos; nos centramos en ofrecer <strong className="text-white font-bold">soluciones químicas integrales</strong> que transforman la eficiencia operativa de nuestros clientes.
              </p>
              <p>
                Actuamos como un <strong className="text-white font-bold">brazo técnico-industrial</strong> para sectores críticos como la minería, petróleo, construcción y tratamiento de agua. Identificamos necesidades puntuales como corrosión, incrustaciones o baja eficiencia en procesos de separación, y diseñamos formulaciones específicas para resolverlas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section - Simplified and Clean with Mobile Carousel */}
      <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header Title Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-isip-dark font-black text-3xl md:text-5xl tracking-tighter uppercase mb-4 leading-none">
              Nuestros Pilares <span className="text-isip-cyan">Fundamentales</span>
            </h2>
            <div className="w-20 h-1.5 bg-isip-cyan mx-auto mb-6"></div>
            <p className="text-gray-500 text-base md:text-lg font-normal leading-snug max-w-2xl mx-auto px-4">
              Valores que guían cada formulación y cada asesoría técnica que brindamos en el campo industrial.
            </p>
          </motion.div>

          {/* Pillars Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-16">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 lg:p-10 border-t-4 border-isip-cyan shadow-xl shadow-gray-200/50 rounded-b-xl"
              >
                <span className="text-isip-cyan font-black text-6xl mb-6 block leading-none opacity-20">{pillar.id}</span>
                <h4 className="text-xl lg:text-2xl font-black text-isip-dark mb-4 uppercase tracking-tight leading-tight">{pillar.title}</h4>
                <p className="text-gray-600 leading-snug font-normal text-base text-justify">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pillars Mobile Carousel (Hidden on Desktop) */}
          <div className="md:hidden relative px-4 h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-x-4 bg-white p-8 border-t-4 border-isip-cyan shadow-2xl rounded-b-xl"
              >
                <span className="text-isip-cyan font-black text-6xl mb-4 block leading-none opacity-20">{pillars[activePillar].id}</span>
                <h4 className="text-xl font-black text-isip-dark mb-4 uppercase tracking-tight leading-tight">{pillars[activePillar].title}</h4>
                <p className="text-gray-600 leading-snug font-normal text-base text-justify">
                  {pillars[activePillar].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center space-x-2">
              {pillars.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activePillar === idx ? 'bg-isip-cyan w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Interactive Tabs on Mobile */}
      <section className="relative py-24 md:py-32 bg-isip-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Mobile Tabs Toggle */}
          <div className="flex md:hidden bg-white/5 p-1 rounded-full border border-white/10 mb-12 max-w-[280px] mx-auto">
            <button
              onClick={() => setActiveTab('mision')}
              className={`flex-1 py-3 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'mision' ? 'bg-isip-cyan text-white shadow-lg' : 'text-white/40'}`}
            >
              Misión
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`flex-1 py-3 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'vision' ? 'bg-isip-cyan text-white shadow-lg' : 'text-white/40'}`}
            >
              Visión
            </button>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-16">
            {/* Misión Card - Desktop */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-isip-cyan">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                </svg>
              </div>
              <div className="mb-6 flex items-center space-x-4">
                <div className="w-12 h-1 bg-isip-cyan"></div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  Nuestra <span className="text-isip-cyan">Misión</span>
                </h3>
              </div>
              <p className="text-white/80 text-lg font-normal leading-snug text-justify">
                Optimizar los procesos productivos de nuestros clientes mediante la aplicación de conocimiento químico especializado, transformando problemas técnicos en oportunidades de eficiencia y rentabilidad para sus operaciones.
              </p>
            </div>

            {/* Visión Card - Desktop */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-isip-cyan">
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" />
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                </svg>
              </div>
              <div className="mb-6 flex items-center space-x-4">
                <div className="w-12 h-1 bg-isip-cyan"></div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  Nuestra <span className="text-isip-cyan">Visión</span>
                </h3>
              </div>
              <p className="text-white/80 text-lg font-normal leading-snug text-justify">
                Ser reconocidos como el socio estratégico líder en soluciones químicas integrales para la industria peruana, destacando por nuestra capacidad de innovación y respuesta técnica personalizada a cada desafío.
              </p>
            </div>
          </div>

          {/* Mobile Tabs Content */}
          <div className="lg:hidden min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeTab === 'mision' ? (
                <motion.div
                  key="mision"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-isip-cyan">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                    </svg>
                  </div>
                  <div className="mb-6 flex items-center space-x-4">
                    <div className="w-10 h-1 bg-isip-cyan"></div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                      Nuestra <span className="text-isip-cyan">Misión</span>
                    </h3>
                  </div>
                  <p className="text-white/80 text-base font-normal leading-snug text-justify">
                    Optimizar los procesos productivos de nuestros clientes mediante la aplicación de conocimiento químico especializado, transformando problemas técnicos en oportunidades de eficiencia y rentabilidad para sus operaciones.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-isip-cyan">
                      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" />
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                    </svg>
                  </div>
                  <div className="mb-6 flex items-center space-x-4">
                    <div className="w-10 h-1 bg-isip-cyan"></div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                      Nuestra <span className="text-isip-cyan">Visión</span>
                    </h3>
                  </div>
                  <p className="text-white/80 text-base font-normal leading-snug text-justify">
                    Ser reconocidos como el socio estratégico líder en soluciones químicas integrales para la industria peruana, destacando por nuestra capacidad de innovación y respuesta técnica personalizada a cada desafío.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
