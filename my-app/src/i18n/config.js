import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import UA from "./ua.json";
import EN from "./en.json";

const resources = {
  UA,
  EN
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "UA",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;