import styled from 'styled-components';
import {theme} from 'theme';

const Card = styled.div<{noPadding?: boolean}>`
  background: ${theme.brand.white};
  height: 100%;
  margin: 0 auto;
  padding: ${({noPadding}) => (noPadding ? '' : theme.spacing.small)};
`;

const CardHeader = styled.div``;

const CardBody = styled.div``;

const CardFooter = styled.div``;

export {Card, CardHeader, CardBody, CardFooter};
