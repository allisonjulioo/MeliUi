import styled, {keyframes} from 'styled-components';
import {theme} from 'theme';

const fade = keyframes`
  from {
    opacity: 0.8;
  }

  to {
    opacity: 1;
  }
`;

const Skeleton = styled.div<{height: number; width: number}>`
  display: inline-block;
  animation: ${fade} 1s linear infinite;
  height: ${({height}) => height}px;
  width: ${({width}) => width}px;
  min-width: ${({width}) => width}px;
  background: ${theme.brand.light};
  border-radius: ${theme.radius};
  opacity: 1;
`;

export {Skeleton};
