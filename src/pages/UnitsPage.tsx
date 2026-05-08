import { motion } from 'framer-motion';
import { Droplets, Pickaxe, Building2, FileText, FlaskConical, Fuel, ChevronRight } from 'lucide-react';
import unidadesBg from '../assets/unidades.png';
import papelypulpaBg from '../assets/papelypulpa.png';
import tratamientoBg from '../assets/tratamiento.png';
import mineriaBg from '../assets/mineria.png';
import construccionBg from '../assets/construccion.png';
import gasBg from '../assets/gas.png';
import alimentariaBg from '../assets/alimentaria.png';
import customSolutionBg from '../assets/custom_solution_bg.png';

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
      <section className="relative h-[70vh] flex items-center justify-center bg-isip-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={unidadesBg}
            alt="Unidades de Negocio Background"
            className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[10s] animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/90 via-isip-dark/10 to-isip-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Unidades de <br /> <span className="text-isip-cyan">Negocio</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
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
          className={`relative min-h-[85vh] flex items-center overflow-hidden py-32 ${unit.bgImage ? 'bg-isip-dark text-white' : idx % 2 !== 0 ? 'bg-isip-light/30' : 'bg-white'}`}
        >
          {unit.bgImage && (
            <div className="absolute inset-0 z-0">
              <img
                src={unit.bgImage}
                alt={unit.title}
                className="w-full h-full object-cover opacity-50 scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${idx % 2 === 0 ? 'from-transparent via-isip-dark/50 to-isip-dark' : 'from-isip-dark via-isip-dark/50 to-transparent'}`}></div>
            </div>
          )}

          <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight ${unit.bgImage ? 'text-white' : 'text-isip-dark'}`}>
                {unit.title}
              </h3>

              <p className={`${unit.bgImage ? 'text-white/80' : 'text-gray-600'} text-lg md:text-xl leading-relaxed font-light max-w-3xl ${idx % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                {unit.desc}
              </p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-isip-dark text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={customSolutionBg}
            alt="Custom Solutions Background"
            className="w-full h-full object-cover opacity-100 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/90 via-isip-dark/60 to-isip-dark/90"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">¿Busca una solución <span className="text-isip-cyan">a medida</span>?</h2>
            <p className="text-white/70 text-xl mb-12 font-light leading-relaxed">
              Nuestra capacidad de formulación nos permite adaptar nuestros productos a las condiciones específicas de sus procesos industriales.
            </p>
            <a
              href="/contacto"
              className="bg-isip-cyan hover:bg-white hover:text-isip-dark text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 inline-block shadow-2xl shadow-isip-cyan/20"
            >
              Hable con un Especialista
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UnitsPage;
