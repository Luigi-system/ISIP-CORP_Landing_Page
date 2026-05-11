import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, ExternalLink } from 'lucide-react';
import robotImg from '../assets/robot.png';
import { getAIResponse, loadChatHistory, saveChatHistory, loadUserData } from '../services/AiServices';
import type { Message, UserData } from '../services/AiServices';

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [input, setInput] = useState('');
  const [userData, setUserData] = useState<UserData>({});
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load history from localStorage
    const history = loadChatHistory();
    const uData = loadUserData();
    setUserData(uData);

    if (history.length > 0) {
      setMessages(history);
    } else {
      // Default welcome message with personalized name if exists
      setMessages([{
        id: 'welcome',
        text: uData.name
          ? `¡Hola de nuevo, ${uData.name}! Qué bueno verte por aquí. ¿En qué puedo ayudarte hoy?`
          : "Hola, soy tu asistente virtual de ISIP CORP. ¿En qué puedo ayudarte hoy?",
        sender: 'bot',
        type: 'text'
      }]);
    }

    // Show bubble after a small delay
    const showTimer = setTimeout(() => setShowBubble(true), 2000);
    const hideTimer = setTimeout(() => setShowBubble(false), 8000);

    const handleOpenExternal = () => handleOpen();
    window.addEventListener('open-ai-chat', handleOpenExternal);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('open-ai-chat', handleOpenExternal);
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    if (messages.length > 1) {
      saveChatHistory(messages);
    }
    return () => clearTimeout(timer);
  }, [messages, isTyping, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    setIsMenuOpen(false);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      type: 'text'
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getAIResponse(text, messages, userData);

    // Refresh userData from localStorage in case AI updated it
    const updatedUserData = loadUserData();
    setUserData(updatedUserData);

    const botMsg: Message = {
      id: Date.now() + 1,
      text: response.text,
      sender: 'bot',
      type: response.type as 'text' | 'widget' | 'button',
      metadata: response.metadata
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  const renderMetadata = (msg: Message) => {
    if (!msg.metadata) return null;

    if (msg.metadata.kind === 'email') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3 p-4 bg-white/10 rounded-xl border border-isip-cyan/30 flex flex-col items-center space-y-3"
        >
          <div className="w-10 h-10 rounded-full bg-isip-cyan/20 flex items-center justify-center text-isip-cyan">
            <Mail size={20} />
          </div>
          <div className="text-center">
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Correo Corporativo</p>
            <p className="text-sm font-bold text-white">{msg.metadata.value}</p>
          </div>
          <a
            href={`mailto:${msg.metadata.value}`}
            className="w-full bg-isip-cyan text-white py-2 rounded-lg text-xs font-black uppercase tracking-wider text-center hover:bg-isip-cyan/80 transition-colors"
          >
            Enviar Mensaje
          </a>
        </motion.div>
      );
    }

    if (msg.metadata.kind === 'whatsapp') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3 p-4 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30 flex flex-col items-center space-y-3"
        >
          <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
            <Phone size={20} />
          </div>
          <div className="text-center">
            <p className="text-[10px] text-[#25D366] uppercase font-bold tracking-widest mb-1">Atención Inmediata</p>
            <p className="text-sm font-bold text-white">{msg.metadata.value}</p>
          </div>
          <a
            href={msg.metadata.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-2 rounded-lg text-xs font-black uppercase tracking-wider text-center hover:bg-[#128C7E] transition-colors"
          >
            Abrir WhatsApp
          </a>
        </motion.div>
      );
    }

    if (msg.metadata.kind === 'unit') {
      return (
        <div className="mt-3">
          <a
            href={`/unidades#${msg.metadata.id}`}
            className="flex items-center justify-between p-4 bg-isip-cyan text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-isip-cyan/20"
          >
            <span>Ver detalles de {msg.metadata.title}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      );
    }

    return null;
  };

  const formatMessage = (text: string) => {
    // Handle bold: **text**
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-isip-cyan">$1</strong>');
    // Handle italics: *text*
    formatted = formatted.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    return formatted.split('\n').map((line, i) => {
      // Handle bullet points: "* " at start of line
      const isBullet = line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      return (
        <span key={i} className={`block min-h-[1em] ${isBullet ? 'pl-6 relative py-0.5' : ''}`}>
          {isBullet && (
            <span className="absolute left-0 text-isip-cyan font-black scale-150 drop-shadow-[0_0_8px_rgba(12,155,193,0.6)]">
              •
            </span>
          )}
          <span
            className={isBullet ? 'text-white font-bold' : ''}
            dangerouslySetInnerHTML={{ __html: cleanLine }}
          />
        </span>
      );
    });
  };

  return (
    <>
      {/* Welcome Bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="fixed bottom-4 right-16 md:bottom-8 md:right-24 z-[9999] bg-white text-isip-dark p-4 rounded-2xl rounded-br-none shadow-2xl max-w-[200px] pointer-events-auto cursor-pointer border-2 border-isip-cyan"
            onClick={handleOpen}
          >
            <p className="text-xs font-bold leading-tight">¡Hola! Soy tu asistente IA. ¿Tienes alguna duda sobre ISIP?</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 md:right-4 z-[10000] w-full md:w-[362px] h-[70vh] md:h-[645px] pointer-events-none flex items-end justify-center md:justify-end"
          >
            <div className="phone-frame pointer-events-auto shadow-2xl">
              {/* External Buttons */}
              <div className="phone-btn-left"></div>
              <div className="phone-btn-left-vol">
                <div className="w-full h-1/3 bg-white/5 rounded-full"></div>
                <div className="w-full h-1/3 bg-white/5 rounded-full"></div>
              </div>
              <div className="phone-btn-right"></div>

              <div className="phone-screen">
                {/* Dynamic Island */}
                <div className="phone-island">
                  <div className="phone-island-camera"></div>
                  <div className="w-12 h-1 bg-white/10 rounded-full"></div>
                </div>

                {/* Header */}
                <div className="bg-isip-dark/80 backdrop-blur-md pt-12 pb-4 px-6 border-b border-white/10 flex items-center justify-between sticky top-0 z-40">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-isip-cyan/20 flex items-center justify-center border border-isip-cyan/30 overflow-hidden">
                      <img src={robotImg} alt="AI" className="w-full h-full object-cover scale-150" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm tracking-tight">Asistente <span className="text-isip-cyan">IA</span></h4>
                      <div className="flex items-center space-x-2 mt-0.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
                        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">En linea</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors">
                    <X size={20} />
                  </button>
                </div>

                {/* Chat Area */}
                <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-isip-dark/50 custom-scrollbar scroll-smooth">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[85%] flex flex-col ${msg.sender === 'bot' ? 'items-start' : 'items-end'}`}>
                        <div
                          className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm ${msg.sender === 'bot'
                            ? 'bg-white/5 text-white border border-white/10 rounded-tl-none font-light'
                            : 'bg-isip-cyan text-white rounded-tr-none font-bold'
                            }`}
                        >
                          {formatMessage(msg.text)}
                        </div>
                        {msg.sender === 'bot' && renderMetadata(msg)}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 rounded-tl-none flex space-x-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 bg-isip-cyan rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-isip-cyan rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-isip-cyan rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Quick Actions & Input */}
                <div className="p-6 bg-isip-dark/90 backdrop-blur-md border-t border-white/10 space-y-4 pb-10">

                  <form
                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }}
                    className="relative flex items-center"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-full py-3 px-6 pr-14 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-isip-cyan/50 transition-all shadow-inner"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className={`absolute right-1.5 w-9 h-9 bg-isip-cyan text-white rounded-full flex items-center justify-center transition-all shadow-lg shadow-isip-cyan/40 ${!input.trim() ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
                    >
                      <Send size={16} />
                    </button>
                  </form>
                </div>

                {/* Home Indicator */}
                <div className="phone-bottom-line"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons Menu (Keeping original menu logic) */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end pointer-events-none">
        <div className="flex flex-col space-y-3 md:space-y-4 pointer-events-auto items-center">

          <AnimatePresence>
            {(isMenuOpen || (typeof window !== 'undefined' && window.innerWidth > 768)) && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="flex flex-col space-y-3 md:space-y-4 items-center"
              >
                {/* LinkedIn Button */}
                <motion.a
                  href="https://www.linkedin.com/company/integral-solutions-for-industrial-processes/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-[#0077b5] p-2 md:p-3 rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 w-12 h-12 md:w-14 md:h-14 border border-gray-100"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=51982268533&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#25D366] text-white p-2 md:p-3 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 w-12 h-12 md:w-14 md:h-14"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 448 512" className="w-6 h-6 md:w-8 md:h-8 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </motion.a>

                {/* Robot Assistant Button */}
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpen}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-isip-dark shadow-2xl overflow-hidden flex items-center justify-center relative border border-white/10 transition-all duration-500 ${isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}`}
                  >
                    <img src={robotImg} alt="Asistente" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-isip-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button for Mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden w-12 h-12 rounded-full bg-isip-cyan text-white shadow-2xl flex items-center justify-center border border-white/20 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}
          >
            {isMenuOpen ? <X size={24} /> : (
              <div className="flex flex-col items-center justify-center space-y-1">
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
              </div>
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default VirtualAssistant;
