import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEng from "./assets/locales/engTranslation.json";
import translationGrmn from "./assets/locales/grTranslation.json";
import translationCh from "./assets/locales/chTranslation.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  eng: {
    translation: translationEng,
  },
  gr: {
    translation: translationGrmn,
  },
  ch: {
    translation: translationCh,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "eng",
    fallbackLng: "eng",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
