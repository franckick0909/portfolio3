import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import fr from "../public/locales/fr/translation.json";
import en from "../public/locales/en/translation.json";
import es from "../public/locales/es/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "fr",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: fr,
      },
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });
