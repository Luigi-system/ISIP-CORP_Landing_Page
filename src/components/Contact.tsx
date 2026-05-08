import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, Send } from 'lucide-react';
import contactInfoBg from '../assets/contact_info_bg.png';

const Contact = () => {
  const [selectedArea, setSelectedArea] = useState('');

  return (
    <section id="contact" className="relative py-32 bg-isip-dark text-white overflow-visible">
      {/* High-end background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contactInfoBg} 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-70 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-isip-dark/60 via-isip-dark/30 to-isip-dark/80"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(12,155,193,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-isip-cyan/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-isip-cyan/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.98] backdrop-blur-3xl rounded-none shadow-[0_48px_100px_-20px_rgba(0,0,0,0.4)] text-isip-dark border border-white/20 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 bg-isip-dark p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-isip-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 space-y-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase leading-[0.95]">
                    Visítanos <br /> en nuestra <span className="text-isip-cyan">Sede</span>
                  </h3>
                  <p className="text-white/60 text-base font-light leading-relaxed">
                    Estamos ubicados en una zona estratégica para atender las necesidades de la industria nacional.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-isip-cyan group-hover:bg-isip-cyan group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-isip-cyan mb-1">Dirección</h4>
                      <p className="text-lg font-medium leading-tight">Av. Alfredo Benavides 2549</p>
                      <p className="text-white/40 text-sm font-light">Surquillo, Lima, Perú</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-isip-cyan group-hover:bg-isip-cyan group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-isip-cyan mb-1">Atención</h4>
                      <p className="text-lg font-medium">Lunes a Viernes</p>
                      <p className="text-white/40 text-sm font-light">8:00 a.m. a 6:00 p.m.</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-isip-cyan group-hover:bg-isip-cyan group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-isip-cyan mb-1">Teléfono</h4>
                      <p className="text-xl font-black tracking-tighter">+51 982 268 533</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 p-12 md:p-16 relative">
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase leading-tight">
                    Solicitud de <span className="text-isip-cyan">Asesoría</span>
                  </h3>
                  <p className="text-gray-400 text-base font-light leading-relaxed">
                    Nuestro equipo técnico responderá con una propuesta a medida.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="group space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Nombre Completo</label>
                      <input 
                        type="text" 
                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 text-base font-medium" 
                        placeholder="Juan Pérez" 
                      />
                    </div>

                    <div className="group space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Correo Corporativo</label>
                      <input 
                        type="email" 
                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 text-base font-medium" 
                        placeholder="juan@empresa.com" 
                      />
                    </div>

                    <div className="group space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Empresa</label>
                      <input 
                        type="text" 
                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 text-base font-medium" 
                        placeholder="Nombre de su entidad" 
                      />
                    </div>

                    <div className="group space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Área</label>
                      <div className="relative">
                        <select 
                          value={selectedArea}
                          onChange={(e) => setSelectedArea(e.target.value)}
                          className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 appearance-none cursor-pointer text-base font-medium"
                        >
                          <option value="" disabled>Seleccione una opción</option>
                          <option value="Optimización de Procesos">Optimización de Procesos</option>
                          <option value="Suministro de Reactivos">Suministro de Reactivos</option>
                          <option value="Asesoría Técnica">Asesoría Técnica</option>
                          <option value="Alianzas Estratégicas">Alianzas Estratégicas</option>
                          <option value="Otros">Otros</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-isip-cyan opacity-50">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedArea === 'Otros' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="group space-y-1 overflow-hidden"
                      >
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Especifique Área</label>
                        <input 
                          type="text" 
                          className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 text-base font-medium" 
                          placeholder="Escriba el área de su interés" 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="group space-y-1 pt-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Mensaje</label>
                    <textarea 
                      rows={2} 
                      className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 resize-none text-base font-medium" 
                      placeholder="¿Cómo podemos ayudarle?"
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <motion.button 
                      whileHover={{ scale: 1.01, translateY: -2 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit" 
                      className="w-full bg-isip-dark text-white py-5 rounded-2xl text-base font-black uppercase tracking-[0.3em] shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group flex items-center justify-center space-x-4"
                    >
                      <span className="relative z-10">Enviar Mensaje</span>
                      <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-isip-cyan to-isip-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
