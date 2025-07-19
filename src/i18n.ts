import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  es: { 
    translation: es.translation 
  },
  en: { 
    translation: en.translation 
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
