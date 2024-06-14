import en from "@config/locales/en.json"
import fr from "@config/locales/fr.json"// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    interpolation: {
      escapeValue: false
    },
    compatibilityJSON: 'v3'
  });

export default i18n;
