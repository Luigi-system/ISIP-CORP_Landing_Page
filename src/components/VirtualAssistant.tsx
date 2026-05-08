import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import robotImg from '../assets/robot.png';

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Show bubble after a small delay
    const showTimer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    // Hide bubble after 5 seconds of being visible
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 7000); // 2s delay + 5s visibility

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: "Hola, soy tu asistente virtual. Estoy aquí para ayudarte.",
          sender: 'bot'
        }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] bg-isip-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-isip-dark p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-isip-cyan/20 flex items-center justify-center border border-isip-cyan/30 overflow-hidden">
                  <img src={robotImg} alt="AI" className="w-full h-full object-cover scale-150" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Asistente ISIP</h4>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-xs text-white/50">En línea</span>
                  </div>
                </div>
              </div>
              <button onClick={handleClose} className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-isip-dark/50 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.sender === 'bot'
                    ? 'bg-white/5 text-white border border-white/10 rounded-tl-none'
                    : 'bg-isip-cyan text-white shadow-lg rounded-tr-none'
                    }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 rounded-tl-none flex space-x-1">
                    <span className="w-1.5 h-1.5 bg-isip-cyan rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-isip-cyan rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-isip-cyan rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-isip-dark border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  readOnly
                  placeholder="Escribe tu mensaje..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-14 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-isip-cyan/50 transition-all cursor-not-allowed"
                />
                <button className="absolute right-2 w-10 h-10 bg-isip-cyan text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-not-allowed">
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-white/20 mt-3 uppercase tracking-widest font-bold">Simulación de Asistente IA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col space-y-4 pointer-events-auto items-center">
        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7436490870381670400"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-[#0077b5] p-3 rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-colors w-14 h-14 border border-gray-100"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://api.whatsapp.com/send/?phone=51982268533&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-3 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors w-14 h-14"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 448 512" className="w-8 h-8 fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </motion.a>

        {/* Robot Assistant Button */}
        <div className="relative group">
          <AnimatePresence>
            {showBubble && !isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.5 }}
                className="absolute bottom-1/2 right-[calc(100%+16px)] translate-y-1/2 bg-isip-cyan text-white py-3 px-6 rounded-2xl rounded-br-none shadow-2xl text-sm font-bold w-[250px] whitespace-normal"
              >
                Hola, soy el asistente virtual de ISIP Corp.
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-isip-cyan" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}></div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpen}
            className="w-14 h-14 rounded-full bg-isip-dark shadow-2xl overflow-hidden flex items-center justify-center relative border border-white/10"
          >
            <img src={robotImg} alt="Asistente" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-isip-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
