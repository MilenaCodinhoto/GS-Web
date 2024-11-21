import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left;
  padding: 20px;

  h2 {
    font-size: 28px;
    color: #00ff00;
  }

  p {
    margin-top: 10px;
    line-height: 1.6;
  }
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
  }
`;

const Section = styled.section`
  margin-top: 50px;

  h3 {
    font-size: 22px;
    color: #ffd700;
  }

  p {
    margin-top: 10px;
    line-height: 1.6;
    padding: 0 20px;
  }
`;

const HighlightSection = styled(Section)`
  background-color: #111;
  padding: 20px;
  margin: 50px 0;
  border-radius: 10px;

  h3 {
    font-size: 24px;
    color: #00ff00;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007700;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: #00aa00;
    }
  }
`;

function DetalhesSolar() {
  return (
    <Container>
      <MainContent>
        <LeftSection>
          <h2>Energia Solar</h2>
          <p>
            A energia solar fotovoltaica é capturada por meio de células solares (ou painéis solares) que convertem a luz do sol em eletricidade. O processo começa quando os fótons da luz solar atingem a célula solar e excitam os elétrons de um material semicondutor, como o silício, criando uma corrente elétrica.
          </p>
          <p>
            Além disso, a energia solar térmica usa coletores solares para aquecer água ou outro fluido, que pode ser utilizado para aquecimento ou até para geração de eletricidade em sistemas de energia solar concentrada.
          </p>
        </LeftSection>
        <RightSection>
          <img src="https://via.placeholder.com/400x300" alt="Energia Solar" />
        </RightSection>
      </MainContent>

      <Section>
        <h3>Benefícios</h3>
        <p>
          A energia solar traz diversos benefícios para o meio ambiente e a sociedade. Reduz as emissões de gases de efeito estufa, contribui para a mitigação das mudanças climáticas e é uma fonte renovável e inesgotável.
        </p>
      </Section>

      <Section>
        <h3>Impactos Ambientais</h3>
        <p>
          Apesar de ser uma fonte renovável, a energia solar apresenta desafios, como a fabricação de painéis solares que pode gerar resíduos tóxicos e o impacto em grandes áreas de terra.
        </p>
      </Section>

      <Section>
        <h3>Acessibilidade em Diferentes Regiões</h3>
        <p>
          A energia solar é eficaz em regiões com boa incidência de luz solar, como áreas tropicais e desérticas. Tecnologias modernas tornam viável sua utilização em climas variados.
        </p>
      </Section>

      <HighlightSection>
        <h3>Explore as Diferenças e Tome uma Decisão Consciente!</h3>
        <p>
          Cada fonte de energia tem seus próprios benefícios e desafios. Compare suas opções para encontrar a que melhor atende às suas necessidades e contribua para um futuro sustentável.
        </p>
        <a href="/comparacao">Acesse agora a nossa Página de Comparação</a>
      </HighlightSection>
    </Container>
  );
}

export default DetalhesSolar;

