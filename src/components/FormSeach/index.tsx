import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../Button';
import {theme} from 'theme';
import {useTranslation} from 'react-i18next';
import {useSearch} from './useSearch';
import {Input} from '../Input';
import searchIcon from 'assets/search.png';

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
  line-height: 3.6;
`;

const FormSeach = () => {
  const {t} = useTranslation();
  const {handleSearch} = useSearch();
  const [search, setSearch] = useState('');

  const handleChangeForm = (key: string) => {
    handleSearch(key);
    setSearch(key);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChangeForm(search);
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Input
        id='input-search'
        value={search}
        placeholder={t('searchBar.placeholder')}
        onChange={e => handleChangeForm(e.target.value)}
      />
      <Submit type='submit'>
        <img src={searchIcon} alt={t('searchBar.altIconSearch')} height='16' />
      </Submit>
    </Form>
  );
};
export {FormSeach};
