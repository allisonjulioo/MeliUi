import {createGlobalStyle} from 'styled-components';
import {theme} from 'theme';

const GlobalStyle = createGlobalStyle` 
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
body,html {
  min-height: 100vh;
}
body {
  background: ${theme.brand.light};
}
h1 {
  font-weight: 200;
}
h2 {
  font-weight: 300;
}
h3 {
  font-weight: 500;
}
`;
export {GlobalStyle};
