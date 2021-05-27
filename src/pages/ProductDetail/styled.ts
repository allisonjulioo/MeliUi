import {Card} from 'components/Card';
import styled from 'styled-components';
import {theme} from 'theme';

const Container = styled(Card)`
  min-height: 85vh;
`;

const Content = styled.div`
  display: flex;
`;

const Heading = styled.div`
  margin-top: ${theme.spacing.large};
  margin-right: ${theme.spacing.large};
  width: 260px;
`;

const Sold = styled.small`
  color: ${theme.brand.dark2};
  display: block;
  margin-bottom: ${theme.spacing.small};
`;

const Title = styled.h3`
  display: block;
  font-size: ${theme.h3.size};
  margin-bottom: ${theme.spacing.large};
`;

const Price = styled.h1`
  position: relative;
  display: flex;
  font-size: ${theme.h1.size};
  margin-bottom: ${theme.spacing.large};
`;

const SmallPrice = styled.span`
  display: block;
  font-size: ${theme.small.size};
  margin-left: 4px;
  line-height: 2;
`;

const Picture = styled.img`
  width: 680px;
  height: 680px;
  margin-right: ${theme.spacing.medium};
  object-fit: contain;
  flex: 1;
`;

const Description = styled.div`
  margin-left: ${theme.spacing.large};
  padding: ${theme.spacing.large} 0;
  width: 68%;
`;

const DescriptionTitle = styled.h2`
  font-size: ${theme.h2.size};
  margin-bottom: ${theme.spacing.large};
`;

const DescriptionText = styled.small`
  font-size: ${theme.small.size};
  font-weight: ${theme.small.weight};
  color: ${theme.brand.dark2};
`;

export {
  Container,
  Content,
  Heading,
  Sold,
  Title,
  Price,
  SmallPrice,
  Picture,
  Description,
  DescriptionTitle,
  DescriptionText,
};
