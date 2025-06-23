import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import ja from './locales/ja/translation.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  ja: { translation: ja },
};

const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

// Сохраняем язык при смене
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n; 
