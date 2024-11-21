import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

function Home() {
  return (
    <Container>
      <h1>LISTA DE FONTES DE ENERGIA</h1>
      <CardContainer>
        <Card
          title="Energia Solar"
          description="A energia solar é gerada a partir da luz do sol..."
          link="/detalhes/solar"
        />
        <Card
          title="Energia Eólica"
          description="A energia eólica aproveita a força do vento..."
          link="/detalhes/eólica"
        />
        <Card
          title="Energia Hidráulica"
          description="A energia hidráulica utiliza o movimento da água..."
          link="/detalhes/hidráulica"
        />
      </CardContainer>
    </Container>
  );
}

export default Home;
