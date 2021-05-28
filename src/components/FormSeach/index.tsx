import React, {FormEvent, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useSearch} from './useSearch';
import {Button} from '../Button';
import {Input} from '../Input';
import searchIcon from 'assets/search.png';
import {theme} from 'theme';
import {useRouter} from 'routes/useRouter';

const Form = styled.form`
  border-radius: ${theme.input.radius};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Submit = styled(Button)`
  height: 100%;
  position: absolute;
  right: 0;
  width: 48px;
  line-height: 3;
`;

const FormSeach = () => {
  const {searchParams} = useRouter();
  const {t} = useTranslation();
  const {handleSearch, getListProducts} = useSearch();
  const {value} = searchParams();
  const [searchBar, setSearch] = useState('');

  const handleChangeForm = (key: string) => {
    handleSearch(key);
    setSearch(key);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getListProducts(searchBar);
  };

  useEffect(() => {
    if (value) {
      return handleChangeForm(value);
    }
    handleChangeForm('');
  }, [value]);

  return (
    <Form onSubmit={handleSubmitForm} data-testid='form-search-bar'>
      <Input
        data-testid='input-search-bar'
        value={searchBar}
        placeholder={t('searchBar.placeholder')}
        onChange={e => handleChangeForm(e.target.value)}
      />
      <Submit type='submit' data-testid='submit-search-bar'>
        <img src={searchIcon} alt={t('searchBar.altIconSearch')} height='16' />
      </Submit>
    </Form>
  );
};
export {FormSeach};
