import styled from 'styled-components';
import {theme} from 'theme';

const Layout = styled.main`
  height: 100%;
  max-width: ${theme.container.width};
  margin: 0 auto;
`;

const LayoutHeader = styled.div``;

const LayoutBody = styled.div`
  flex: 1;
  overflow: auto;
`;

const LayoutFooter = styled.div``;

export {Layout, LayoutHeader, LayoutBody, LayoutFooter};
