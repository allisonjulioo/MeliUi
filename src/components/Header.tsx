import React from 'react';
import styled from 'styled-components';
import {theme} from 'theme';

const Nav = styled.nav`
  background: ${theme.brand.primary};
  width: 100%;
  height: ${theme.nav.height};
  padding: ${theme.spacing.medium} ${theme.spacing.small};
`;
const Container = styled.div`
  max-width: ${theme.container.width};
  margin: 0 auto;
`;
const Header = () => (
  <Nav>
    <Container>Navegação</Container>
  </Nav>
);

export {Header};
