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

      {/* Pillars Section - Centered Vertically */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={innovacionBg}
            alt="Pilares de Innovación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-isip-dark/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/40 via-transparent to-isip-dark/40 opacity-30"></div>
        </div>

        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col items-center justify-center">
          {/* Header Title Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-white font-black text-5xl md:text-7xl tracking-tighter uppercase mb-6 leading-none">
              Nuestros Pilares <span className="text-isip-cyan text-shadow-lg">Fundamentales</span>
            </h2>
            <div className="w-24 h-2 bg-isip-cyan mx-auto mb-6"></div>
            <p className="text-white/70 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Valores que guían cada formulación y cada asesoría técnica que brindamos en el campo industrial.
            </p>
          </motion.div>

          {/* Pillars in a Row with Maximum Separation */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-48 xl:gap-64">
            {/* Pillar 01 - Shifted Down and Left */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 20 }}
              viewport={{ once: true }}
              className="w-full md:translate-y-16 md:-translate-x-12 lg:-translate-x-24"
            >
              <div className="p-6 w-full min-h-[160px] flex flex-col justify-start text-center">
                <div>
                  <span className="text-isip-cyan font-black text-5xl mb-4 block leading-none">01</span>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">Innovación Tecnológica</h4>
                  <p className="text-white/60 leading-relaxed font-light text-base pt-2">
                    Desarrollamos formulaciones químicas de vanguardia adaptadas a las condiciones específicas de cada proceso.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pillar 02 - Central and High */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="p-6 w-full min-h-[160px] flex flex-col justify-start text-center">
                <div>
                  <span className="text-isip-cyan font-black text-5xl mb-4 block leading-none">02</span>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">Compromiso Técnico</h4>
                  <p className="text-white/60 leading-relaxed font-light text-base pt-2">
                    Garantizamos resultados operativos y sostenibilidad en cada intervención técnica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pillar 03 - Shifted Down and Right */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 20 }}
              viewport={{ once: true }}
              className="w-full md:translate-y-16 md:translate-x-12 lg:translate-x-24"
            >
              <div className="p-6 w-full min-h-[160px] flex flex-col justify-start text-center">
                <div>
                  <span className="text-isip-cyan font-black text-5xl mb-4 block leading-none">03</span>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">Calidad Certificada</h4>
                  <p className="text-white/60 leading-relaxed font-light text-base pt-2">
                    Rigurosos estándares de fabricación que aseguran seguridad en el manejo químico industrial.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Text Floating */}
      <section className="relative py-48 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={misionBg}
            alt="Misión y Visión ISIP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-isip-dark/75 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-64">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-xl mx-auto"
            >
              <div className="mb-6">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                  Nuestra <span className="text-isip-cyan">Misión</span>
                </h3>
                <div className="w-16 h-1 bg-isip-cyan mb-6 mx-auto"></div>
              </div>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                Optimizar los procesos productivos de nuestros clientes mediante la aplicación de conocimiento químico especializado, transformando problemas técnicos en oportunidades de eficiencia y rentabilidad.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-xl mx-auto"
            >
              <div className="mb-6">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                  Nuestra <span className="text-isip-cyan">Visión</span>
                </h3>
                <div className="w-16 h-1 bg-isip-cyan mb-6 mx-auto"></div>
              </div>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                Ser reconocidos como el socio estratégico líder en soluciones químicas integrales para la industria peruana, destacando por nuestra capacidad de innovación y respuesta técnica personalizada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
