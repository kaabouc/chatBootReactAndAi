// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          send: 'Send',
          typeMessage: 'Type message here',
          chatGPTIsTyping: 'ChatGPT is typing',
          readAloud: 'Read Aloud',
        },
      },
      fr: {
        translation: {
          send: 'Envoyer',
          typeMessage: 'Tapez votre message ici',
          chatGPTIsTyping: 'ChatGPT est en train de taper',
          readAloud: 'Lire à haute voix',
        },
      },
    },
    es: {
        translation: {
          send: 'Enviar',
          typeMessage: 'Escribe tu mensaje aquí',
          chatGPTIsTyping: 'ChatGPT está escribiendo',
          readAloud: 'Leer en voz alta',
        },
      },
      ar: {
        translation: {
          send: 'إرسال',
          typeMessage: 'اكتب رسالتك هنا',
          chatGPTIsTyping: 'تحرير الدردشة',
          readAloud: 'اقرأ بصوت عال',
        },
      },
      // Ajoutez d'autres langues au besoin...
   
    lng: 'en', // Langue par défaut
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
