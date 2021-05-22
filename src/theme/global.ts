import {createGlobalStyle} from 'styled-components';
import {theme} from 'theme';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,html {
  min-height: 100vh;
}
body {
  background: ${theme.brand.light};
}
`;
export {GlobalStyle};
