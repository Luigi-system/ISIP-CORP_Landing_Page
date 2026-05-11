import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, Send } from 'lucide-react';
import logo from '../assets/main/logo.png';

declare const L: any;

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isCardVisible, setIsCardVisible] = useState(true);

  useEffect(() => {
    const handleOpen = () => {
      if (window.innerWidth < 768) {
        setIsCardVisible(false);
      }
    };
    const handleClose = () => setIsCardVisible(true);

    window.addEventListener('open-asesoria-modal', handleOpen);
    window.addEventListener('close-asesoria-modal', handleClose);

    return () => {
      window.removeEventListener('open-asesoria-modal', handleOpen);
      window.removeEventListener('close-asesoria-modal', handleClose);
    };
  }, []);

  const pinLat = -12.1276232;
  const pinLng = -77.008763;

  // Centramos el iframe siempre en el PIN para que la ubicación sea exacta
  const mapCenterLat = pinLat;
  const mapCenterLng = pinLng;

  return (
    <div className="bg-isip-dark h-screen relative overflow-hidden">
      {/* Background Map - Google Maps (Free Version) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Contenedor maestro: se desplaza en móvil para bajar el punto de mira sin perder la sincronía */}
        <div className={`absolute transition-all duration-700 ease-in-out 
          ${isMobile
            ? 'h-[125%] -top-[20%] translate-y-[20%] inset-x-0 w-full'
            : 'w-[140%] h-full -left-[30%] top-0 translate-x-[20%]'}`}>

          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapCenterLat},${mapCenterLng}&hl=es&z=18&ie=UTF8&iwloc=&output=embed`}
          ></iframe>

          {/* Marcador: posicionado al 50% del contenedor para que siempre coincida con el centro del mapa */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="relative flex items-end justify-center" style={{ width: '120px', height: '120px' }}>
              <div className="relative group flex items-end justify-center">
                {/* The pulse effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-isip-cyan rounded-full animate-ping opacity-30 scale-[2.5]"></div>

                <div className="w-24 h-24 md:w-36 md:h-36 relative z-10 flex items-end justify-center">
                  <svg viewBox="-5 -5 110 110" className="w-full h-full text-isip-cyan filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]">
                    <path
                      fill="currentColor"
                      stroke="#0c9bc1"
                      strokeWidth="5"
                      d="M50 100 C 50 100 92 55 92 35 C 92 15 73.2 0 50 0 C 26.8 0 8 15 8 35 C 8 55 50 100 50 100 Z"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center -mt-8 md:-mt-12">
                    <div className="w-14 h-14 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <img src={logo} alt="ISIP" className="w-10 h-10 md:w-13 md:h-13 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:justify-start py-20 md:py-0 pointer-events-none">

        {/* Info Card */}
        <AnimatePresence>
          {isCardVisible && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              className="w-full max-w-sm md:max-w-md bg-isip-dark/95 p-5 md:p-12 border border-white/10 shadow-2xl pointer-events-auto rounded-none mt-12 md:mt-0"
            >
              <div className="space-y-4 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-3xl font-black mb-1 md:mb-3 tracking-tighter uppercase leading-[0.9] text-white">
                    {isMobile ? (
                      <>Nuestra <span className="text-isip-cyan">Sede</span></>
                    ) : (
                      <>Visítanos <br /> en nuestra <span className="text-isip-cyan">Sede</span></>
                    )}
                  </h3>
                  <p className="hidden md:block text-white/50 text-xs font-light leading-relaxed">
                    Nuestra oficina central está ubicada en el corazón estratégico de Lima para brindar soporte nacional.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-5">
                  {/* Address */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-white/5 flex items-center justify-center text-isip-cyan shrink-0 group-hover:bg-isip-cyan group-hover:text-white transition-all duration-300">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="hidden md:block text-[8px] font-black uppercase tracking-[0.2em] text-isip-cyan mb-0.5">Ubicación</h4>
                      <p className="text-xs md:text-sm font-medium text-white leading-tight">Av. Alfredo Benavides 2549</p>
                      <p className="text-white/30 text-[9px] font-light">Surquillo, Lima, Perú</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-white/5 flex items-center justify-center text-isip-cyan shrink-0 group-hover:bg-isip-cyan group-hover:text-white transition-all duration-300">
                      <Clock size={16} />
                    </div>
                    <div>
                      <h4 className="hidden md:block text-[8px] font-black uppercase tracking-[0.2em] text-isip-cyan mb-0.5">Horario</h4>
                      <p className="text-xs md:text-sm font-medium text-white">Lun - Vie • 8am - 6pm</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-white/5 flex items-center justify-center text-isip-cyan shrink-0 group-hover:bg-isip-cyan group-hover:text-white transition-all duration-300">
                      <Phone size={16} />
                    </div>
                    <div>
                      <h4 className="hidden md:block text-[8px] font-black uppercase tracking-[0.2em] text-isip-cyan mb-0.5">Central</h4>
                      <p className="text-sm md:text-base font-black tracking-tighter text-white">+51 982 268 533</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-0 md:pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.dispatchEvent(new CustomEvent('open-asesoria-modal'))}
                    className="w-full bg-isip-cyan text-white py-3 md:py-3.5 rounded-none text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-isip-cyan/20 flex items-center justify-center space-x-2 md:space-x-3 group transition-all duration-300"
                  >
                    <span className="relative z-10">Solicitar Asesoría</span>
                    <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactPage;
