import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ContextProducts} from 'useList';

const SearchPage = () => {
  const [data] = useContext(ContextProducts);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const {t} = useTranslation();

  return <div>{t('searchPage.title')}</div>;
};

export {SearchPage};
