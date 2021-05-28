import React, {useContext} from 'react';
import styled from 'styled-components';
import {theme} from 'theme';
import {rowAlignCenter, rowJustifyCenter} from 'theme/mixins';
import {ContextProducts} from 'useList';
import {useSearch} from './FormSeach/useSearch';
import {ResponseListProducts} from 'models/products';

const Container = styled.div`
  padding: ${theme.spacing.small} 0;
  width: 100%;
  ${rowJustifyCenter}
`;

const Ul = styled.ul`
  list-style: none;
  max-width: ${theme.container.width};
  width: 100%;
  ${rowAlignCenter}
`;

const Li = styled.li`
  margin-right: ${theme.spacing.small};
`;

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.brand.dark2};
  font-size: ${theme.xsmall.size};
  &:hover {
    color: ${theme.brand.secondary};
  }
`;

const Icon = styled.span`
  margin-left: ${theme.spacing.small};
`;

const BreadCrumb = () => {
  const [context] = useContext<{data: ResponseListProducts}[]>(ContextProducts);
  const categories = context?.data?.categories;
  const {getListProducts} = useSearch();

  return (
    <Container>
      <Ul>
        {categories?.map((category, index) => (
          <Li key={index}>
            <Anchor
              onClick={() => getListProducts(category)}
              data-testid='item-category'
            >
              {`${category}`}
            </Anchor>
            {index !== categories.length - 1 && <Icon>›</Icon>}
          </Li>
        ))}
      </Ul>
    </Container>
  );
};
export {BreadCrumb};
