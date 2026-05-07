import { motion } from 'framer-motion';
import { Target, Users } from 'lucide-react';
import industrialBg from '../assets/industrial_chemistry_background_1778024988113.png';
import leadershipBg from '../assets/industrial_peru_chemistry_bg_1778026411021.png';
import innovacionBg from '../assets/innovacion.png';
import misionBg from '../assets/mision.png';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-isip-dark overflow-hidden">
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
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none"
          >
            Nuestra <span className="text-isip-cyan text-shadow-lg">Esencia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Más que proveedores, somos aliados estratégicos en soluciones químicas especializadas.
            Impulsamos la eficiencia y sostenibilidad de los procesos industriales mediante innovación,
            conocimiento técnico y productos de alto rendimiento.
          </motion.p>
        </div>
      </section>

      {/* Main Vision Section - Updated with Background Image */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
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
            <h3 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-tight">
              Liderando la Química Industrial en el Perú
            </h3>
            <div className="space-y-8 text-white/80 text-xl leading-relaxed font-light">
              <p>
                En ISIP, nos dedicamos al desarrollo, fabricación y comercialización de productos químicos especializados de alto desempeño. Nuestro enfoque trasciende la simple venta de insumos; nos centramos en ofrecer <strong>soluciones químicas integrales</strong> que transforman la eficiencia operativa de nuestros clientes.
              </p>
              <p>
                Actuamos como un brazo técnico-industrial para sectores críticos como la minería, petróleo, construcción y tratamiento de agua. Identificamos necesidades puntuales como corrosión, incrustaciones o baja eficiencia en procesos de separación, y diseñamos formulaciones específicas para resolverlas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section - Updated with Panels Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={innovacionBg}
            alt="Pilares de Innovación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/80 via-isip-dark/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center min-h-[800px]">
            {/* Left Panel: Pillar 1 (Centered) */}
            <div className="h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group w-full"
              >
                <div className="bg-isip-dark/40 backdrop-blur-md p-10 rounded-[20px] border-t-2 border-isip-cyan/50 hover:border-isip-cyan transition-all duration-700 hover:bg-isip-dark/60 w-full min-h-[320px] flex flex-col justify-between group-hover:transform group-hover:scale-[1.02] shadow-2xl text-center">
                  <div>
                    <span className="text-isip-cyan/40 font-black text-5xl mb-6 block group-hover:text-isip-cyan transition-colors duration-500">01</span>
                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight leading-tight">Innovación Tecnológica</h4>
                    <p className="text-white/50 leading-relaxed font-light text-base border-t border-white/10 pt-4 group-hover:text-white/80 transition-colors">
                      Desarrollamos formulaciones químicas de vanguardia adaptadas a las condiciones específicas de cada proceso.
                    </p>
                  </div>
                  <div className="mt-6 overflow-hidden h-1 w-0 mx-auto bg-isip-cyan group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            </div>

            {/* Center Panel: Pillars 2 & 3 Stacked (Uniform sizes) */}
            <div className="h-full flex flex-col justify-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group w-full"
              >
                <div className="bg-isip-dark/40 backdrop-blur-md p-10 rounded-[20px] border-t-2 border-isip-cyan/50 hover:border-isip-cyan transition-all duration-700 hover:bg-isip-dark/60 w-full min-h-[320px] flex flex-col justify-between group-hover:transform group-hover:scale-[1.02] shadow-2xl text-center">
                  <div>
                    <span className="text-isip-cyan/40 font-black text-5xl mb-6 block group-hover:text-isip-cyan transition-colors duration-500">02</span>
                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight leading-tight">Compromiso Técnico</h4>
                    <p className="text-white/50 leading-relaxed font-light text-base border-t border-white/10 pt-4 group-hover:text-white/80 transition-colors">
                      Garantizamos resultados operativos y sostenibilidad en cada intervención técnica.
                    </p>
                  </div>
                  <div className="mt-6 overflow-hidden h-1 w-0 mx-auto bg-isip-cyan group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group w-full"
              >
                <div className="bg-isip-dark/40 backdrop-blur-md p-10 rounded-[20px] border-t-2 border-isip-cyan/50 hover:border-isip-cyan transition-all duration-700 hover:bg-isip-dark/60 w-full min-h-[320px] flex flex-col justify-between group-hover:transform group-hover:scale-[1.02] shadow-2xl text-center">
                  <div>
                    <span className="text-isip-cyan/40 font-black text-5xl mb-6 block group-hover:text-isip-cyan transition-colors duration-500">03</span>
                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight leading-tight">Calidad Certificada</h4>
                    <p className="text-white/50 leading-relaxed font-light text-base border-t border-white/10 pt-4 group-hover:text-white/80 transition-colors">
                      Rigurosos estándares de fabricación que aseguran seguridad en el manejo químico industrial.
                    </p>
                  </div>
                  <div className="mt-6 overflow-hidden h-1 w-0 mx-auto bg-isip-cyan group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            </div>

            {/* Right Panel: Main Titles */}
            <div className="h-full flex flex-col justify-center items-center text-center md:pl-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <h2 className="text-white font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6 leading-tight text-center">
                  Nuestros Pilares <span className="text-isip-cyan text-shadow-lg">Fundamentales</span>
                </h2>
                <div className="w-20 h-2 bg-isip-cyan mx-auto mb-6"></div>
                <p className="text-white/70 text-lg font-light leading-relaxed text-center">
                  Valores que guían cada formulación y cada asesoría técnica que brindamos en el campo industrial.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Updated with Background Panels */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={misionBg}
            alt="Misión y Visión ISIP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-isip-dark/50 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-isip-dark/80 backdrop-blur-xl p-12 md:p-20 rounded-[60px] border border-white/10 shadow-2xl group hover:border-isip-cyan/30 transition-all duration-500"
            >
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-isip-cyan/20 rounded-2xl flex items-center justify-center text-isip-cyan">
                  <Target size={36} />
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Nuestra <span className="text-isip-cyan">Misión</span></h3>
              </div>
              <p className="text-white/70 text-xl font-light leading-relaxed">
                Optimizar los procesos productivos de nuestros clientes mediante la aplicación de conocimiento químico especializado, transformando problemas técnicos en oportunidades de eficiencia y rentabilidad.
              </p>
              <div className="mt-12 w-20 h-1 bg-isip-cyan/30 group-hover:w-full transition-all duration-700"></div>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-isip-dark/80 backdrop-blur-xl p-12 md:p-20 rounded-[60px] border border-white/10 shadow-2xl group hover:border-isip-cyan/30 transition-all duration-500"
            >
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-isip-cyan/20 rounded-2xl flex items-center justify-center text-isip-cyan">
                  <Users size={36} />
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Nuestra <span className="text-isip-cyan">Visión</span></h3>
              </div>
              <p className="text-white/70 text-xl font-light leading-relaxed">
                Ser reconocidos como el socio estratégico líder en soluciones químicas integrales para la industria peruana, destacando por nuestra capacidad de innovación y respuesta técnica personalizada.
              </p>
              <div className="mt-12 w-20 h-1 bg-isip-cyan/30 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
