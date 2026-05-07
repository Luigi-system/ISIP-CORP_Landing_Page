import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Map from '../components/Map';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-isip-dark py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,155,193,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase"
          >
            Conectemos <span className="text-isip-cyan">Hoy</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Nuestro equipo técnico está listo para analizar sus procesos y proponer soluciones químicas de alto impacto.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 -mt-40 relative z-20">
          {[
            { icon: Phone, title: "Llámenos", info: "+51 982 268 533", color: "bg-isip-cyan" },
            { icon: Mail, title: "Email", info: "soporte@isip-corp.com", color: "bg-isip-dark" },
            { icon: MapPin, title: "Oficina", info: "Miraflores, Lima, Perú", color: "bg-isip-dark" },
            { icon: MessageSquare, title: "WhatsApp", info: "Respuesta inmediata", color: "bg-green-600" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${card.color} p-10 rounded-[40px] text-white shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
            >
              <card.icon className="mb-6 opacity-80" size={32} />
              <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{card.title}</h4>
              <p className="font-bold text-lg">{card.info}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reusing Form and Map */}
      <Contact />
      <Map />

      {/* Global Presence Text */}
      <section className="py-24 bg-isip-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-isip-dark uppercase tracking-tighter mb-8">Atención a nivel Nacional</h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Contamos con la logística y el soporte técnico necesario para atender operaciones en todo el territorio peruano, llegando a los campamentos mineros, refinerías y plantas industriales más remotas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
