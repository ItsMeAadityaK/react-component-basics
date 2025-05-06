import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
          translation: {
            welcome: "Welcome to Focus Bear!",
          },
        },
        fr: {
          translation: {
            welcome: "Bienvenue à Focus Bear!",
          },
        },
      }
  });

export default i18n;
