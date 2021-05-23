import React, {useContext} from 'react';
import styled from 'styled-components';
import {theme} from 'theme';
import {useTranslation} from 'react-i18next';
import {rowAlignCenter, rowJustifyCenter} from 'theme/mixins';
import {ContextSearch} from 'models/context';
import {ContextProducts} from 'useList';

const Container = styled.div`
  height: 40px;
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

const BreadCrumb = () => {
  const [context] = useContext<ContextSearch[]>(ContextProducts);
  const {
    data: {categories},
  } = context ?? {data: {categories: []}};

  const {t} = useTranslation();

  return (
    <Container>
      <Ul>
        {categories.map(category => (
          <Li key={category}>{t(category)} . </Li>
        ))}
      </Ul>
    </Container>
  );
};
export {BreadCrumb};
