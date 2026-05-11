import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { sendNotificationEmail } from '../services/EmailServices';

interface SolicitarAsesoriaProps {
  isOpen: boolean;
  onClose: () => void;
}

const SolicitarAsesoria = ({ isOpen, onClose }: SolicitarAsesoriaProps) => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    correo_corporativo: '',
    area_interes: '',
    detalles: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendNotificationEmail(formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        // Reset form
        setFormData({
          nombre_completo: '',
          correo_corporativo: '',
          area_interes: '',
          detalles: ''
        });
      }, 3000);
    } catch (err: any) {
      console.error('Error sending email:', err);
      setError('Hubo un problema al enviar su solicitud. Por favor, intente de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 right-0 md:right-24 w-full md:w-[400px] h-[75vh] md:h-auto bg-white rounded-t-[2rem] shadow-[0_-10px_50px_rgba(0,0,0,0.2)] z-[2000] overflow-hidden border-t border-gray-100 flex flex-col"
        >
          {/* Header */}
          <div className="bg-isip-dark p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-isip-cyan/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-black uppercase tracking-tighter">Solicitud de <span className="text-isip-cyan">Asesoría</span></h3>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Soporte Técnico Especializado</p>
            </div>
            <button
              onClick={onClose}
              className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 overflow-y-auto flex-grow">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-isip-dark uppercase tracking-tighter">¡Enviado!</h4>
                  <p className="text-xs text-gray-500">Pronto nos comunicaremos con usted.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 text-red-500 text-[10px] rounded-lg flex items-center space-x-2 border border-red-100">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="group space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Nombre Completo</label>
                    <input 
                      required
                      name="nombre_completo"
                      value={formData.nombre_completo}
                      onChange={handleChange}
                      type="text" 
                      className="w-full px-0 py-1 bg-transparent border-b border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 text-xs font-medium" 
                      placeholder="Juan Pérez" 
                    />
                  </div>

                  <div className="group space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Correo Corporativo</label>
                    <input 
                      required
                      name="correo_corporativo"
                      value={formData.correo_corporativo}
                      onChange={handleChange}
                      type="email" 
                      className="w-full px-0 py-1 bg-transparent border-b border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 text-xs font-medium" 
                      placeholder="juan@empresa.com" 
                    />
                  </div>

                  <div className="group space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Área de Interés</label>
                    <div className="relative">
                      <select 
                        required
                        name="area_interes"
                        value={formData.area_interes}
                        onChange={handleChange}
                        className="w-full px-0 py-1 bg-transparent border-b border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 appearance-none cursor-pointer text-xs font-medium"
                      >
                        <option value="" disabled>Seleccione...</option>
                        <option value="Optimización">Optimización</option>
                        <option value="Reactivos">Suministro de Reactivos</option>
                        <option value="Asesoría">Asesoría Técnica</option>
                        <option value="Otros">Otros</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="group space-y-1 pt-1">
                  <label className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-isip-cyan transition-colors">Mensaje</label>
                  <textarea 
                    required
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    rows={2} 
                    className="w-full px-0 py-1 bg-transparent border-b border-gray-100 focus:border-isip-cyan outline-none transition-all duration-500 placeholder:text-gray-200 resize-none text-xs font-medium" 
                    placeholder="¿En qué podemos ayudarle?"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit" 
                    className={`w-full bg-isip-dark text-white py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Enviando...</span>
                        <Loader2 size={14} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send size={14} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolicitarAsesoria;

