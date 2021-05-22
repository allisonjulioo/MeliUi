import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import HttpBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

const languages = {
  ptBR: 'pt-BR',
};

const {REACT_APP_LOCIZE_PROJECT_ID, REACT_APP_LOCIZE_VERSION, NODE_ENV} =
  process.env;

const IS_PRODUCTION = NODE_ENV === 'production';

const runI18nSetup = () => {
  const configBase = {
    fallbackLng: languages.ptBR,
    interpolation: {
      escapeValue: false,
    },
  };

  if (IS_PRODUCTION) {
    i18n
      .use(LocizeBackend)
      .use(initReactI18next)
      .init({
        backend: {
          projectId: REACT_APP_LOCIZE_PROJECT_ID,
          referenceLng: languages.ptBR,
          saveMissing: false,
          updateMissing: false,
          version: REACT_APP_LOCIZE_VERSION,
        },
        ...configBase,
      });

    return;
  }

  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      ...configBase,
    });
};

runI18nSetup();
