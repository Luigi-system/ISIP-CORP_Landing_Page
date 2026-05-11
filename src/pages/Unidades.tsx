import { motion } from 'framer-motion';
import { Droplets, Pickaxe, Building2, FileText, FlaskConical, Fuel } from 'lucide-react';
import unidadesBg from '../assets/unidades/seccion_1x.png';
import papelypulpaBg from '../assets/unidades/seccion_2x.png';
import tratamientoBg from '../assets/unidades/seccion_3x.png';
import mineriaBg from '../assets/unidades/seccion_4x.png';
import construccionBg from '../assets/unidades/seccion_5x.png';
import gasBg from '../assets/unidades/seccion_6x.png';
import alimentariaBg from '../assets/unidades/seccion_7x.png';
import customSolutionBg from '../assets/unidades/seccion_8x.png';

const UnitsPage = () => {
  const units = [
    {
      icon: Droplets,
      title: "Papel & Pulpa",
      desc: "Desarrollamos soluciones químicas especializadas para la industria de pulpa y papel, enfocadas en mejorar la eficiencia de producción, optimizar la calidad del producto final y reducir el impacto operativo en los procesos industriales. Nuestro portafolio incluye productos para control microbiológico, retención, drenaje, blanqueamiento, tratamiento de efluentes y optimización de sistemas de caldera, adaptándonos a las necesidades específicas de cada planta.",
      bgImage: papelypulpaBg
    },
    {
      icon: Pickaxe,
      title: "Tratamiento de Agua",
      desc: "Brindamos soluciones integrales para el tratamiento de agua industrial y residual, orientadas a maximizar la eficiencia de los procesos, garantizar la calidad del recurso hídrico y contribuir al reúso sostenible del agua. Trabajamos con tecnologías y productos químicos especializados para control de incrustaciones, corrosión, clarificación, sedimentación y tratamiento físico-químico en distintos sectores industriales.",
      bgImage: tratamientoBg
    },
    {
      icon: Fuel,
      title: "Minería",
      desc: "Ofrecemos soluciones químicas de alto desempeño para procesos mineros, contribuyendo a mejorar la recuperación de minerales, optimizar la flotación y garantizar la estabilidad operativa de las plantas. Nuestra experiencia nos permite desarrollar productos adaptados a las exigencias de la industria minera, incluyendo reactivos, espumantes, floculantes y tratamientos especializados para agua de proceso.",
      bgImage: mineriaBg
    },
    {
      icon: Building2,
      title: "Construcción",
      desc: "Desarrollamos aditivos y soluciones químicas orientadas a optimizar procesos constructivos, mejorar el rendimiento de los materiales y aumentar la eficiencia en obra. Nuestros productos están diseñados para aportar mayor resistencia, trabajabilidad y durabilidad en aplicaciones de construcción, contribuyendo a reducir tiempos de ejecución y costos operativos.",
      bgImage: construccionBg
    },
    {
      icon: FileText,
      title: "Gas y Petróleo",
      desc: "Proveemos productos químicos especializados para operaciones de extracción, refinación y tratamiento en la industria de gas y petróleo. Nuestras soluciones están enfocadas en el control de corrosión, inhibición de incrustaciones, tratamiento de efluentes y optimización de procesos críticos, permitiendo mejorar la seguridad, eficiencia y continuidad operativa en cada etapa del proceso industrial.",
      bgImage: gasBg
    },
    {
      icon: FlaskConical,
      title: "Industria Alimentaria",
      desc: "Ofrecemos soluciones químicas y tratamientos especializados para procesos de la industria alimentaria, priorizando la eficiencia operativa, la calidad del agua y el cumplimiento de estándares industriales. Nuestros productos están diseñados para aplicaciones en tratamiento de agua, control de procesos, sistemas de vapor y optimización de operaciones, asegurando un desempeño confiable y sostenible en entornos de producción alimentaria.",
      bgImage: alimentariaBg
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={unidadesBg}
            alt="Unidades de Negocio Background"
            className="w-full h-full object-cover opacity-70 scale-105 transition-transform duration-[10s] animate-slow-zoom"
          />
          {/* Very subtle blue tint only at the edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/40 via-transparent to-isip-dark/40"></div>
          {/* Deep dark overlay for professional contrast and clarity */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
              Unidades de <br /> <span className="text-isip-cyan">Negocio</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto font-normal leading-snug text-center">
              Explora nuestra gama de soluciones químicas diseñadas para elevar la eficiencia operativa de los sectores más exigentes de la industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Units Sections */}
      {units.map((unit, idx) => (
        <section
          key={idx}
          id={unit.title.toLowerCase().replace(/ & /g, '-').replace(/ y /g, '-').replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
          className={`relative min-h-screen flex items-center overflow-hidden py-32 ${unit.bgImage ? 'bg-slate-950 text-white' : idx % 2 !== 0 ? 'bg-isip-light/30' : 'bg-white'}`}
        >
          {unit.bgImage && (
            <div className="absolute inset-0 z-0">
              <img
                src={unit.bgImage}
                alt={unit.title}
                className={`w-full h-full object-cover opacity-60 scale-105 transition-transform duration-700 ${idx % 2 === 0 ? 'object-right' : 'object-left'}`}
              />
              {/* Vignette effect matching the hero section */}
              <div className={`absolute inset-0 
                bg-gradient-to-b from-slate-950 via-transparent to-slate-950 md:to-transparent
                md:bg-gradient-to-r 
                ${idx % 2 === 0
                  ? 'md:from-slate-950 md:via-slate-950/40 md:via-40%'
                  : 'md:from-transparent md:via-slate-950/40 md:via-60% md:to-slate-950'}`}>
              </div>
              <div className="absolute inset-0 bg-isip-dark/10"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          )}

          <div className={`w-full px-6 md:px-20 relative z-10 
            ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`space-y-6 max-w-md md:max-w-lg ${idx % 2 !== 0 ? 'ml-auto' : ''}`}
            >
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                {unit.title}
              </h3>

              <p className="text-white text-base md:text-xl leading-relaxed font-normal text-justify drop-shadow-lg">
                {unit.desc}
              </p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white text-center px-4 overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={customSolutionBg}
            alt="Custom Solutions Background"
            className="w-full h-full object-cover opacity-70 scale-105"
          />
          {/* Vignette effect matching the hero section */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-isip-dark/10 to-slate-950"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter">¿Necesita <span className="text-isip-cyan">Asesoría Técnica</span>?</h2>
            <p className="text-white/70 text-base md:text-lg mb-8 font-normal leading-snug text-center">
              Nuestro Asistente de Inteligencia Artificial está capacitado para brindarle información técnica inmediata sobre nuestras soluciones. Obtenga soporte especializado en tiempo real.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="bg-isip-cyan hover:bg-white hover:text-isip-dark text-white px-8 py-3.5 rounded-lg font-black uppercase tracking-widest transition-all duration-500 inline-block shadow-2xl shadow-isip-cyan/20 text-sm"
            >
              Hable con un Especialista IA
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UnitsPage;
