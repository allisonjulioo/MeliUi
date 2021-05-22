import styled from 'styled-components';
import {theme} from 'theme';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: ${theme.container.width};
  margin: 0 auto;
  padding-top: ${theme.spacing.small};
`;

const LayoutHeader = styled.div``;

const LayoutBody = styled.div`
  flex: 1;
  overflow: auto;
`;

const LayoutFooter = styled.div``;

export {Layout, LayoutHeader, LayoutBody, LayoutFooter};
