import React, {useState} from 'react';
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
  margin-top: ${theme.spacing.medium};
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

const SkeletonList = () => {
  const [rows] = useState(Array.from(Array(10).keys()));
  return (
    <Container>
      {rows.map(index => (
        <List key={index}>
          <Picture height={180} width={180} />
          <Heading>
            <Title height={32} width={60} />
            <Description height={16} width={400} />
            <Description height={16} width={100} />
          </Heading>
        </List>
      ))}
    </Container>
  );
};
export {SkeletonList};
