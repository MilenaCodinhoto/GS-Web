import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: #fff;

  h1 {
    color: #00aaff;
  }
`;

function DetalhesHidraulica() {
  return (
    <Container>
      <h1>Energia Hidráulica</h1>
      <p>A energia hidráulica utiliza o movimento da água...</p>
    </Container>
  );
}

export default DetalhesHidraulica;
