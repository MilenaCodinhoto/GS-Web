import styled from "styled-components";
import BannerSolar from '../../images/banner-hidraulica.jpg'

const Container = styled.div`
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column; /* Alinha itens verticalmente */
  align-items: center; /* Centraliza no eixo horizontal */
`;

const LeftSection = styled.div`
  text-align: center; /* Centraliza os textos */

  h2 {
    font-size: 28px;
    color: #00ff00;
  }

  p {
    max-width: 85rem;
    text-align: center; /* Centraliza o texto */
    padding: 20px;
    margin: 0 auto;
  }
`;

const RightSection = styled.div`
  width: 100%; /* Permitir que o contêiner da imagem preencha toda a largura */

  img {
    width: 100%;
    height: auto; 
  }
`;

const Section = styled.section`

  h3 {
  padding: 20px;
    font-size: 22px;
    color: #fff;
  }

  p {
    max-width: 85rem;
    text-align: center;
    padding: 20px;
    margin: 0 auto;
  }
`;

const HighlightSection = styled(Section)`
  background-color: #000;
  padding: 20px;
  border-radius: 10px;

  h3 {
    font-size: 24px;
    color: #CBE86A;
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


function DetalhesHidraulica() {
  return (
    <Container>
      <MainContent>
        <LeftSection>
        <RightSection>
          <img src= {BannerSolar} alt="Energia Solar" />
        </RightSection>
          <p>
          A energia hidráulica (ou hidrelétrica) utiliza o movimento da água em rios ou reservatórios para gerar eletricidade. A água é armazenada em uma represa, e, quando liberada, sua força faz com que turbinas girem. Esse movimento é então transformado em energia elétrica por meio de geradores. A energia gerada é proporcional ao volume de água e à queda d'água disponível.
          Além das grandes hidrelétricas, que envolvem enormes reservatórios, existem as usinas hidrelétricas de pequena escala, que aproveitam o fluxo de rios menores e com menos impacto ambiental.
          </p>
        </LeftSection>
      </MainContent>

      <Section>
        <h3>Benefícios</h3>
        <p>
        A energia hidráulica apresenta uma série de benefícios que a tornam uma das fontes mais importantes e confiáveis de eletricidade no mundo. Um dos principais é sua alta capacidade de geração, permitindo a produção de grandes volumes de energia de forma estável e contínua, ideal para atender às demandas de regiões inteiras. Além disso, as usinas hidrelétricas oferecem a vantagem do armazenamento de energia em seus reservatórios, possibilitando suprir picos de demanda e atuar como fonte de energia "backup" em situações críticas. Outro destaque é a durabilidade dessas instalações, que possuem uma vida útil longa, frequentemente operando por várias décadas, o que justifica o investimento inicial elevado.        </p>
      </Section>

      <Section>
        <h3>Impactos Ambientais</h3>
        <p>
        A energia hidráulica, embora seja uma fonte renovável, traz impactos ambientais significativos. A construção de grandes represas geralmente resulta na submersão de vastas áreas de terra, o que pode causar alterações profundas nos ecossistemas locais, afetando a fauna, a flora e, muitas vezes, deslocando comunidades que habitam essas regiões. Além disso, as mudanças no fluxo natural dos rios podem comprometer a biodiversidade aquática e a qualidade da água. Outro impacto relevante ocorre em represas localizadas em áreas tropicais, onde a decomposição da vegetação submersa libera metano, um gás de efeito estufa com alto potencial de aquecimento global. Esses desafios destacam a importância de um planejamento cuidadoso para minimizar os efeitos ambientais das hidrelétricas.  </p>
      </Section>

      <Section>
        <h3>Acessibilidade em Diferentes Regiões</h3>
        <p>
        A energia hidráulica depende da disponibilidade de grandes corpos d'água e de uma topografia favorável. Países como o Brasil, Canadá e China têm vasta experiência com grandes usinas hidrelétricas devido às suas bacias hidrográficas. No entanto, a construção de grandes represas pode ser um desafio em regiões com poucos rios ou onde o impacto ambiental seria muito alto.
        </p>
      </Section>

      <HighlightSection>
        <h3>Explore as Diferenças e Tome uma Decisão Consciente!</h3>
        <p>
        Você sabia que cada fonte de energia tem seus próprios benefícios e desafios? A energia solar é limpa e acessível, mas exige espaço e cuidados com o descarte dos painéis. Já a energia eólica é sustentável e econômica, mas pode impactar a fauna e a paisagem. E a hidráulica, com sua alta capacidade de geração, também traz questões ambientais importantes, como a submersão de terras e emissões de metano em áreas tropicais.        </p>
        <a href="/comparacao">Acesse agora a nossa Página de Comparação</a>
      </HighlightSection>
    </Container>
  );
}

export default DetalhesHidraulica;

