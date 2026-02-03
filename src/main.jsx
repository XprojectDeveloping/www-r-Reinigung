import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "./components/Language/translations/Index.js";
const defaultLanguage = ["de"];
i18next.use(LanguageDetector, initReactI18next).init({
  resources,
  fallbacking: defaultLanguage,
  interpolation: { escapeValue: true },
  lng: window.localStorage.getItem("i18nextLng"),
  debug: false,
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <Layout>
        <App />
      </Layout>
    </I18nextProvider>
  </BrowserRouter>,
);
