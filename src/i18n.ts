import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // layout
      services: "Services",
      products: "Products",
      contact: "Contact Us",
      about: "About Us",
    },
  },
  ka: {
    translation: {
      // layout
      services: "სერვისები",
      products: "პროდუქტები",
      contact: "დაგვიკავშირდით",
      about: "ჩვენს შესახებ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ka",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
