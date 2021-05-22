import styled from 'styled-components';
import {theme} from 'theme';

const Input = styled.input`
  border: ${theme.input.border};
  border-radius: ${theme.input.radius};
  height: ${theme.input.height};
  padding: 0 ${theme.spacing.medium};
  font-size: ${theme.input.size};
  outline: transparent;
  width: 100%;
`;

export {Input};
