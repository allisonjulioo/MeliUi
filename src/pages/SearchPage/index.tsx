import styled from 'styled-components';

const Container = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchPage = () => {
  return (
    <Container id='search-page'>
      <p>Pesquise algo na caixa de pesquisa</p>
    </Container>
  );
};

export {SearchPage};
