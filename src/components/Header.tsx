import React from 'react';
import styled from 'styled-components';
import {theme} from 'theme';
import {rowAlignCenter} from 'theme/mixins';
import {FormSeach} from './FormSeach';
import logo from 'assets/logo.png';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {useSearch} from './FormSeach/useSearch';

const Nav = styled.nav`
  background: ${theme.brand.primary};
  height: ${theme.nav.height};
  width: 100%;
  ${rowAlignCenter}
`;

const Brand = styled.img`
  height: 36px;
  margin-right: ${theme.spacing.medium};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${theme.container.width};
  width: 100%;
  ${rowAlignCenter}
`;

const Header = () => {
  const {t} = useTranslation();
  const {getListProducts} = useSearch();

  return (
    <Nav>
      <Container>
        <Link to='/' onClick={() => getListProducts('')}>
          <Brand src={logo} alt={t('header.altIconLogo')} />
        </Link>
        <FormSeach />
      </Container>
    </Nav>
  );
};

export {Header};
