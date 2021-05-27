import {Card} from 'components/Card';
import styled from 'styled-components';
import {theme} from 'theme';
import {Link} from 'react-router-dom';

const Container = styled(Card)`
  min-height: 85vh;
`;

const Item = styled(Link)`
  border-bottom: thin solid ${theme.brand.light};
  background: transparent;
  display: flex;
  position: relative;
  text-decoration: none;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

const Image = styled.img`
  border-radius: ${theme.radius};
  margin: ${theme.spacing.small};
  height: 180px;
  width: 180px;
  object-fit: contain;
`;

const Heading = styled.section`
  margin-top: ${theme.spacing.small};
  min-width: 67%;
`;

const Price = styled.h3`
  font-size: ${theme.h3.size};
  color: ${theme.brand.dark1};
  font-weight: normal;
  margin-top: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.medium};
`;

const Description = styled.p`
  font-size: ${theme.paragraph.size};
  color: ${theme.brand.dark1};
`;

const FreeShipping = styled.img`
  margin-left: ${theme.spacing.small};
  height: 20px;
`;

const Locale = styled.small`
  color: ${theme.brand.dark3};
  font-size: ${theme.small.size};
  margin: ${theme.spacing.large} ${theme.spacing.large} 0 0;
`;

export {
  Container,
  Item,
  Image,
  Heading,
  Price,
  Description,
  FreeShipping,
  Locale,
};
