import React, {useContext, useEffect, useState} from 'react';
import {ContextProducts} from 'useList';
import {ResponseListProducts} from 'models/products';
import searchIcon from 'assets/shipping.png';
import {
  Container,
  Item,
  Image,
  Heading,
  Price,
  Description,
  FreeShipping,
  Locale,
} from './styled';
import {SkeletonList} from './SkeletonList';

const ResultsSearchPage = () => {
  const [products, setProducts] = useState<ResponseListProducts>();
  const [data] = useContext<{data: ResponseListProducts}[]>(ContextProducts);

  useEffect(() => setProducts(data?.data), [data]);

  if (!products && !data) {
    return <SkeletonList />;
  }

  return (
    <Container noPadding id='result-search'>
      {products?.items?.map((product, index) => (
        <Item
          key={index}
          to={`/items/${product.id}`}
          data-testid='product-result'
        >
          <Image
            data-testid='product-image'
            src={product.picture}
            alt={product.title}
          />
          <Heading>
            <Price>
              {product.price.formated}
              {product.free_shipping && (
                <FreeShipping
                  data-testid='product-free-shipping'
                  src={searchIcon}
                  height='20'
                />
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
