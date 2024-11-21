import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: #fff;

  h1 {
    color: #ffd700;
  }
`;

function DetalhesSolar() {
  return (
    <Container>
      <h1>Energia Solar</h1>
      <p>A energia solar é gerada a partir da luz do sol...</p>
    </Container>
  );
}

export default DetalhesSolar;
