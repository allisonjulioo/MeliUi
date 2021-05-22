import React from 'react';
import {useTranslation} from 'react-i18next';

const SearchPage = () => {
  const {t} = useTranslation();
  return <div>{t('searchPage.title')}</div>;
};

export {SearchPage};
