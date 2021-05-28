import React from 'react';
import {useProductDetail} from './useProductDetail';
import {Button} from 'components/Button';
import {useTranslation} from 'react-i18next';
import {formatAmount, formatDecimals} from 'providers/currency';
import {SkeletonDetail} from './SkeletonDetail';
import {
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
} from './styled';

const ProductDetail = () => {
  const {t} = useTranslation();
  const {data} = useProductDetail();

  if (!data?.title) {
    return <SkeletonDetail />;
  }

  return (
    <Container noPadding id='detail-page'>
      <Content>
        <Picture src={data?.picture} alt={data?.title} />
        <Heading>
          <Sold>
            {data?.condition} - {data?.sold_quantity} vendidos
          </Sold>
          <Title>{data?.title}</Title>
          <Price>
            {data?.price.symbol} {formatAmount(data?.price.amount)}
            <SmallPrice>{formatDecimals(data?.price.decimals)}</SmallPrice>
          </Price>
          <Button primary>{t('detailPage.button')}</Button>
        </Heading>
      </Content>
      <Description>
        <DescriptionTitle>{t('detailPage.description')}</DescriptionTitle>
        <DescriptionText>{data?.description}</DescriptionText>
      </Description>
    </Container>
  );
};

export {ProductDetail};
