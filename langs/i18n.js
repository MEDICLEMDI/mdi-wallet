import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import kr from './kr.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    kr: kr,
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
