import React, {useContext, useEffect, useState} from 'react';
import {ContextProducts} from 'useList';
import {ResponseListProducts} from 'models/products';
import {Card} from 'components/Card';
import styled from 'styled-components';
import {theme} from 'theme';
import {Link} from 'react-router-dom';
import searchIcon from 'assets/shipping.png';
import {currency} from 'providers/currency';

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
  object-fit: cover;
`;

const Heading = styled.section`
  margin-top: ${theme.spacing.small};
  flex: 0.8;
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

const ResultsSearchPage = () => {
  const [products, setProducts] = useState<ResponseListProducts>();
  const [data] = useContext(ContextProducts);

  useEffect(() => setProducts(data?.data), [data]);

  return (
    <Container noPadding>
      {products?.items.map((product, index) => (
        <Item key={index} to={`/items/${product.id}`}>
          <Image src={product.picture} alt={product.title} />
          <Heading>
            <Price>
              {currency(
                product.price.currency,
                product.price.amount,
                product.price.decimals,
              )}
              {product.free_shipping && (
                <FreeShipping src={searchIcon} height='20' />
              )}
            </Price>
            <Description>{product.title}</Description>
            <Description>{product.condition}!</Description>
          </Heading>
          <Locale>{product.state.name}</Locale>
        </Item>
      ))}
    </Container>
  );
};

export {ResultsSearchPage};
