import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

const languages = {
  ptBR: 'pt-BR',
};

const runI18nSetup = () => {
  const configBase = {
    fallbackLng: languages.ptBR,
    interpolation: {
      escapeValue: false,
    },
  };

  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      ...configBase,
    });
};

runI18nSetup();
