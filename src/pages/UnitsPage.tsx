import { motion } from 'framer-motion';
import { Droplets, Pickaxe, Building2, FileText, FlaskConical, Fuel, ChevronRight } from 'lucide-react';

const UnitsPage = () => {
  const units = [
    {
      icon: Droplets,
      title: "Tratamiento de Agua Industrial",
      desc: "Nuestra unidad core especializada en la gestión del recurso hídrico mediante química avanzada.",
      details: [
        "Coagulantes y Floculantes de alto rendimiento.",
        "Biocidas para control microbiológico.",
        "Inhibidores de corrosión e incrustación.",
        "Optimización de clarificación y sedimentación.",
        "Soluciones para reutilización de agua industrial."
      ],
      image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80"
    },
    {
      icon: Pickaxe,
      title: "Minería & Metalurgia",
      desc: "Optimizamos la recuperación de metales mediante procesos químicos eficientes.",
      details: [
        "Reactivos para flotación de minerales.",
        "Colectores y espumantes especializados.",
        "Modificadores de pH y activadores.",
        "Control de polvos y efluentes mineros."
      ],
      image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80"
    },
    {
      icon: Fuel,
      title: "Petróleo & Gas",
      desc: "Soluciones químicas para toda la cadena de valor, desde extracción hasta refinación.",
      details: [
        "Tratamiento químico en pozos de extracción.",
        "Desemulsificantes y rompedores de lodos.",
        "Inhibidores de parafinas y asfaltenos.",
        "Limpieza química institucional."
      ],
      image: "https://images.unsplash.com/photo-1544211100-244e6b18973b?auto=format&fit=crop&q=80"
    },
    {
      icon: Building2,
      title: "Construcción",
      desc: "Aditivos técnicos que mejoran las propiedades de los materiales de construcción.",
      details: [
        "Superplastificantes para concreto de alta resistencia.",
        "Acelerantes y retardadores de fraguado.",
        "Impermeabilizantes de masa y superficie.",
        "Curadores y desmoldantes químicos."
      ],
      image: "https://images.unsplash.com/photo-1541888941297-8591cd6d622d?auto=format&fit=crop&q=80"
    },
    {
      icon: FileText,
      title: "Papel & Pulpa",
      desc: "Química de procesos para optimizar la calidad y el rendimiento en la fabricación de papel.",
      details: [
        "Auxiliares de retención y drenaje.",
        "Resinas de resistencia en seco y húmedo.",
        "Control de depósitos y pitch.",
        "Agentes blanqueadores y colorantes."
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      icon: FlaskConical,
      title: "Procesos Térmicos & Especialidades",
      desc: "Cuidado de sistemas críticos como calderas y circuitos de enfriamiento.",
      details: [
        "Tratamiento para calderas y sistemas de vapor.",
        "Prevención de incrustaciones en intercambiadores.",
        "Tratamiento de efluentes complejos.",
        "Desarrollos químicos a medida."
      ],
      image: "https://images.unsplash.com/photo-1532187863486-abf91ad9b0c0?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-isip-light py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-isip-cyan/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-isip-cyan font-bold tracking-widest uppercase text-sm mb-4">Portafolio</h2>
            <h1 className="text-6xl md:text-8xl font-black text-isip-dark mb-8 tracking-tighter uppercase leading-none">
              Unidades de <br /> <span className="text-isip-cyan">Negocio</span>
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Explora nuestra gama de soluciones químicas diseñadas para elevar la eficiencia operativa de los sectores más exigentes de la industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {units.map((unit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-[60px] shadow-2xl">
                  <img 
                    src={unit.image} 
                    alt={unit.title} 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-isip-dark/20 group-hover:bg-isip-dark/0 transition-colors duration-500"></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div className="w-20 h-20 bg-isip-light rounded-3xl flex items-center justify-center text-isip-cyan">
                  <unit.icon size={40} />
                </div>
                <h3 className="text-4xl font-black text-isip-dark uppercase tracking-tighter leading-tight">
                  {unit.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed font-light">
                  {unit.desc}
                </p>
                <ul className="space-y-4">
                  {unit.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-medium group">
                      <div className="w-8 h-8 rounded-full bg-isip-cyan/10 flex items-center justify-center text-isip-cyan mr-4 transition-colors group-hover:bg-isip-cyan group-hover:text-white">
                        <ChevronRight size={16} />
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-isip-cyan font-bold uppercase tracking-widest text-sm"
                >
                  Solicitar Ficha Técnica <ChevronRight className="ml-2" size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-isip-dark text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">¿Busca una solución <span className="text-isip-cyan">a medida</span>?</h2>
          <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
            Nuestra capacidad de formulación nos permite adaptar nuestros productos a las condiciones específicas de sus procesos industriales.
          </p>
          <a 
            href="/contacto" 
            className="bg-isip-cyan hover:bg-white hover:text-isip-dark text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 inline-block shadow-2xl shadow-isip-cyan/20"
          >
            Hable con un Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default UnitsPage;
