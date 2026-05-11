import knowledgeBase from '../data/knowledgeBase.json';

const API_KEY = import.meta.env.VITE_AI_API_KEY;
const MODEL = import.meta.env.VITE_AI_MODEL || 'gemini-1.5-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

export interface Message {
  id: string | number;
  text: string;
  sender: 'bot' | 'user';
  type?: 'text' | 'widget' | 'button';
  metadata?: any;
}

export interface UserData {
  name?: string;
  company?: string;
  industry?: string;
}

const SYSTEM_PROMPT = (userData: UserData) => `
Eres el Asistente Virtual Inteligente de ISIP CORP (Integral Solutions for Industrial Processes S.A.C.).

CONTEXTO DEL USUARIO ACTUAL:
${userData.name ? `- Nombre del usuario: ${userData.name}` : '- Nombre del usuario: Desconocido (pregúntale su nombre amablemente si es oportuno)'}
${userData.company ? `- Empresa: ${userData.company}` : ''}

Tu objetivo es ayudar a los usuarios con información técnica y comercial basada en la siguiente base de conocimientos:

${JSON.stringify(knowledgeBase, null, 2)}

REGLAS DE COMPORTAMIENTO:
1. Responde de manera profesional, técnica y amable.
2. SIEMPRE dirígete al usuario por su nombre si lo conoces para crear una experiencia personalizada.
3. Si el usuario no se ha presentado, busca un momento natural para preguntarle su nombre y empresa.
4. Si el usuario te da su nombre o empresa, agradécele, confirma que lo recordarás y DEBES incluir etiquetas especiales al final de tu respuesta (que no serán visibles para el usuario) para que el sistema las guarde:
   - Para el nombre: [USER_DATA:NAME:valor]
   - Para la empresa: [USER_DATA:COMPANY:valor]
5. Si el usuario pregunta por servicios, menciona las Unidades de Negocio.
6. Si el usuario pide contacto, DEBES usar el formato especial:
   - Para Email: [WIDGET:EMAIL]
   - Para WhatsApp: [WIDGET:WHATSAPP]
   - Para una Unidad de Negocio específica: [BUTTON:UNIDAD:id_unidad]
7. Siempre responde en Español.
`;

export const getAIResponse = async (userMessage: string, history: Message[] = [], userData: UserData = {}) => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.sender === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT(userData) }]
          },
          {
            role: 'model',
            parts: [{ text: "Entendido. Soy el asistente de ISIP CORP y responderé basándome en la base de conocimientos proporcionada." }]
          },
          ...chatHistory,
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    const aiText = data.candidates[0].content.parts[0].text;
    
    // Parse special tokens
    let type: 'text' | 'widget' | 'button' = 'text';
    let metadata = null;

    if (aiText.includes('[WIDGET:EMAIL]')) {
      type = 'widget';
      metadata = { kind: 'email', value: knowledgeBase.contact.email };
    } else if (aiText.includes('[WIDGET:WHATSAPP]')) {
      type = 'widget';
      metadata = { kind: 'whatsapp', value: knowledgeBase.contact.whatsapp, link: knowledgeBase.contact.whatsappLink };
    } else if (aiText.includes('[BUTTON:UNIDAD:')) {
      const match = aiText.match(/\[BUTTON:UNIDAD:(.*?)\]/);
      if (match) {
        const unitId = match[1];
        const unit = knowledgeBase.services.find(s => s.id === unitId);
        type = 'button';
        metadata = { kind: 'unit', id: unitId, title: unit?.title };
      }
    }

    // Extract User Data updates
    const nameMatch = aiText.match(/\[USER_DATA:NAME:(.*?)\]/);
    const companyMatch = aiText.match(/\[USER_DATA:COMPANY:(.*?)\]/);
    
    if (nameMatch || companyMatch) {
      const currentData = loadUserData();
      const newData = {
        ...currentData,
        ...(nameMatch && { name: nameMatch[1] }),
        ...(companyMatch && { company: companyMatch[1] }),
      };
      saveUserData(newData);
    }

    return {
      text: aiText.replace(/\[WIDGET:.*?\]|\[BUTTON:.*?\]|\[USER_DATA:.*?\]/g, '').trim(),
      type,
      metadata
    };
  } catch (error) {
    console.error("AI Service Error:", error);
    return {
      text: "Lo siento, tuve un problema al procesar tu consulta. ¿Podrías intentar de nuevo?",
      type: 'text'
    };
  }
};

export const saveChatHistory = (history: Message[]) => {
  localStorage.setItem('isip_chat_history', JSON.stringify(history));
};

export const loadChatHistory = (): Message[] => {
  const saved = localStorage.getItem('isip_chat_history');
  return saved ? JSON.parse(saved) : [];
};

export const saveUserData = (data: UserData) => {
  localStorage.setItem('isip_user_data', JSON.stringify(data));
};

export const loadUserData = (): UserData => {
  const saved = localStorage.getItem('isip_user_data');
  return saved ? JSON.parse(saved) : {};
};
