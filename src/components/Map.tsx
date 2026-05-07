import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Map = () => {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-isip-cyan font-bold tracking-wider uppercase text-sm mb-4">Ubicación</h2>
              <h3 className="text-4xl font-black text-isip-dark mb-6 tracking-tighter uppercase leading-tight">
                Visítanos en nuestra sede central
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Estamos ubicados en una zona estratégica para atender las necesidades de la industria nacional de manera eficiente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-isip-light rounded-xl text-isip-cyan">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-isip-dark">Dirección</h4>
                  <p className="text-gray-600 text-sm">Av. Alfredo Benavides 2549, Miraflores 15048</p>
                  <p className="text-gray-600 text-sm italic">Surquillo, Lima, Perú</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-isip-light rounded-xl text-isip-cyan">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-isip-dark">Horario de Atención</h4>
                  <p className="text-gray-600 text-sm">Lunes a viernes de 8:00 a.m. a 6:00 p.</p>
                  <p className="text-gray-600 text-sm">Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-isip-light rounded-xl text-isip-cyan">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-isip-dark">Teléfono</h4>
                  <p className="text-gray-600 text-sm">+51 982 268 533</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Column - Expands on Hover */}
          <div className="lg:col-span-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                zIndex: 50,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-auto lg:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.725!2d-77.0072824!3d-12.1276285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9723a2ab4d1%3A0x27bfbf15d1dfcd8b!2sIntegral%20Solutions%20for%20Industrial%20Processes%20S.A.C.!5e0!3m2!1ses!2spe!4v1714881000000!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
              {/* Overlay hint */}
              <div className="absolute inset-0 bg-isip-dark/20 opacity-0 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-isip-cyan/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-isip-dark/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
