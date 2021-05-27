import React from 'react';
import {Skeleton} from 'components/Skeleton';
import {Container} from './styled';
import styled from 'styled-components';
import {theme} from 'theme';

const List = styled.div`
  margin-bottom: ${theme.spacing.medium};
  display: flex;
`;

const Picture = styled(Skeleton)`
  margin-right: ${theme.spacing.medium};
`;

const Heading = styled.div`
  margin-right: ${theme.spacing.medium};
`;

const Title = styled(Skeleton)`
  display: block;
  margin-bottom: ${theme.spacing.medium};
`;

const Description = styled(Skeleton)`
  margin-bottom: ${theme.spacing.medium};
  display: block;
`;

const SkeletonDetail = () => {
  return (
    <Container>
      <List>
        <Picture height={680} width={680} />
        <Heading>
          <Title height={10} width={100} />
          <Description height={15} width={200} />
          <Description height={16} width={260} />
          <Description height={40} width={130} />
          <Description height={42} width={260} />
        </Heading>
      </List>
      <Heading>
        <Title height={32} width={300} />
        <Description height={100} width={600} />
      </Heading>
    </Container>
  );
};
export {SkeletonDetail};
