import React from 'react';
import {Card} from 'components/Card';
import styled from 'styled-components';
import {useProductDetail} from './useProductDetail';
import {Button} from 'components/Button';
import {theme} from 'theme';
import {useTranslation} from 'react-i18next';

const Container = styled(Card)`
  min-height: 85vh;
`;

const Content = styled.div`
  display: flex;
`;

const Heading = styled.div`
  margin-top: ${theme.spacing.large};
  width: 200px;
`;

const Picture = styled.img`
  width: 680px;
  height: 680px;
  margin-right: ${theme.spacing.medium};
  object-fit: contain;
`;

const ProductDetail = () => {
  const {t} = useTranslation();
  const {data} = useProductDetail();

  return (
    <Container>
      <Content>
        <Picture src={data?.picture} alt={data?.title} />
        <Heading>
          <small>
            {data?.condition} {data?.sold} vendidos
          </small>
          <h3>{data?.title}</h3>
          <h1>{data?.price.amount}</h1>
          <Button primary>Comprar</Button>
        </Heading>
      </Content>
      <div>
        <h4>{t('detailPage.description')}</h4>
        <small>{data?.description}</small>
      </div>
    </Container>
  );
};

export {ProductDetail};
