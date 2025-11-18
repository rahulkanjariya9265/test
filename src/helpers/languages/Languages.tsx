import { initReactI18next } from "react-i18next";
import i18next from "i18next";

// Import translation files
import en from "./en.json";
import hi from "./hi.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: __DEV__,

  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    hi: {
      translation: hi,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
