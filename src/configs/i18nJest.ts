import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const languages = {
  ptBR: 'pt-BR',
};

const runI18nSetup = async () => {
  const translation = await import(
    '../../public/locales/pt-BR/translation.json'
  );
  i18n.use(initReactI18next).init({
    resources: {
      [languages.ptBR]: {
        translation,
      },
    },
    fallbackLng: languages.ptBR,
    interpolation: {
      escapeValue: false,
    },
  });
};

runI18nSetup();
