import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section id="location" className="relative w-full h-[350px] overflow-hidden bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.725!2d-77.0072824!3d-12.1276285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9723a2ab4d1%3A0x27bfbf15d1dfcd8b!2sIntegral%20Solutions%20for%20Industrial%20Processes%20S.A.C.!5e0!3m2!1ses!2spe!4v1714881000000!5m2!1ses!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
      ></iframe>

      {/* Subtle top shadow for depth */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Map;
