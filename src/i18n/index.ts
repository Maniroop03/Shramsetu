import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en';
import { hi } from './hi';
import { te } from './te';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      te: { translation: te },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'te'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'laborease-lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
