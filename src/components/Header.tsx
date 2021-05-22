import React from 'react';
import styled from 'styled-components';
import {theme} from 'theme';
import {rowAlignCenter} from 'theme/mixins';
import {FormSeach} from './FormSeach';
import logo from 'assets/logo.png';
import {useTranslation} from 'react-i18next';

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
  return (
    <Nav>
      <Container>
        <Brand src={logo} alt={t('header.altIconLogo')} />
        <FormSeach />
      </Container>
    </Nav>
  );
};

export {Header};
