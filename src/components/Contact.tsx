import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 bg-isip-dark text-white overflow-hidden relative">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-isip-cyan/5 -skew-x-12 transform translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-isip-cyan/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(12,155,193,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Sole Component: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] text-isip-dark relative overflow-hidden group border border-white/10"
        >
          {/* Subtle decorative element inside form */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-isip-cyan/5 rounded-bl-[150px] transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <h2 className="text-isip-cyan font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center justify-center">
              <span className="w-8 h-[1px] bg-isip-cyan mr-4"></span>
              Contacto Institucional
              <span className="w-8 h-[1px] bg-isip-cyan ml-4"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase text-center leading-tight">
              Solicitud de <span className="text-isip-cyan">Asesoría</span> Técnica
            </h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-isip-cyan focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-300 text-lg" 
                    placeholder="Ej. Juan Pérez" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Correo Corporativo</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-isip-cyan focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-300 text-lg" 
                    placeholder="juan@empresa.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Empresa / Organización</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-isip-cyan focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-300 text-lg" 
                    placeholder="Nombre de su entidad" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Área de Interés</label>
                  <div className="relative">
                    <select className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-isip-cyan focus:bg-white outline-none transition-all duration-300 appearance-none cursor-pointer text-lg">
                      <option>Optimización de Procesos Industriales</option>
                      <option>Suministro de Reactivos Químicos</option>
                      <option>Consultoría Técnica Especializada</option>
                      <option>Alianzas Estratégicas</option>
                      <option>Otros Requerimientos</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-isip-cyan">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Detalles del Requerimiento</label>
                <textarea 
                  rows={5} 
                  className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-isip-cyan focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-300 resize-none text-lg" 
                  placeholder="Describa brevemente cómo podemos ayudarle..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#0c9bc1' }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-isip-dark text-white py-6 rounded-2xl text-xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-isip-cyan/20 transition-all duration-500"
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
