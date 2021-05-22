import styled from 'styled-components';
import {theme} from 'theme';
import {columnJustifyBetween} from 'theme/mixins';

const Layout = styled.main`
  height: 100%;
  max-width: ${theme.container.width};
  margin: 0 auto;
  padding-top: ${theme.spacing.small};
  ${columnJustifyBetween}
`;

const LayoutHeader = styled.div``;

const LayoutBody = styled.div`
  flex: 1;
  overflow: auto;
`;

const LayoutFooter = styled.div``;

export {Layout, LayoutHeader, LayoutBody, LayoutFooter};
