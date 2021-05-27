import styled, {css} from 'styled-components';
import {theme} from 'theme';

const primaryButton = css`
  background: ${theme.brand.secondary};
  border-radius: ${theme.button.radius};
  color: ${theme.button.primary.color};
  padding: ${theme.button.padding.horizontal} ${theme.button.padding.vertical};
  width: 100%;
`;

const Button = styled.button<{primary?: boolean; size?: string}>`
  border: none;
  cursor: pointer;
  font-size: ${({size}) => (size ? size : theme.button.size)};
  ${({primary}) => (primary ? primaryButton : '')}
  &:active {
    opacity: 0.8;
  }
`;

export {Button};
