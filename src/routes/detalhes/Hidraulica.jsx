import styled from "styled-components";
import BannerHidraulica from '../../images/banner-hidraulica.jpg'
import ButtonBack from '../../images/botao-voltar.png'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Container = styled.div`
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
`
const ButtonBackContainer = styled.div`
  position: fixed; 
  bottom: 20px; 
  right: 20px;
  z-index: 100;
  margin-bottom: 80px;
  padding: 20px;
  
.botao-voltar img {
    width: 50px; 
    height: 50px; 
    cursor: pointer; 
    transition: transform 0.2s; 

&:hover {
      transform: scale(1.1); 
    }
}
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

const LeftSection = styled.div`
  text-align: center;

  p {
    max-width: 80%;
    text-align: center;
    padding: 20px;
    margin: 0 auto;
  }

  &::after {
    content: '';
    display: block;
    width: 50%; 
    height: 2px;
    background-color: #CBE86A; 
    margin: 20px auto 0; 
  }
`;

const RightSection = styled.div`
.banner{ 
    width: 100%;
    height: 400px; 
    overflow: hidden; 
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: center; 
}
`

const Section = styled.section`

  position: relative;
  padding-bottom: 20px; 
  margin-bottom: 40px; 
  text-align: center;

  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 50%; 
    height: 2px; 
    background-color: #CBE86A; 
    margin: 20px auto 0; 
  }

  h3 {
  padding: 20px;
    font-size: 22px;
  }

  p {
    max-width: 80%;
    text-align: center;
    padding: 20px;
    margin: 0 auto;
  }
`

const HighlightSection = styled(Section)`
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
    background-color: #132B13;
    color: #CBE86A;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: #132B13;
    }
  }
`


function DetalhesHidraulica() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate("/listafontes");
  }

  return (
    <Container>
      <ButtonBackContainer>
        <div className="botao-voltar">
        <img src={ButtonBack} alt="Botão voltar" onClick={handleBackClick}  />
        </div>
      </ButtonBackContainer>
      <MainContent>
        <LeftSection>
        <RightSection>
          <div className="banner">
          <img className="banner-image" src= {BannerHidraulica} alt="Energia Hidraulica" />
          </div>
        </RightSection>
          <p>
          A energia hidráulica (ou hidrelétrica) utiliza o movimento da água em rios ou reservatórios para gerar eletricidade. A água é armazenada em uma represa, e, quando liberada, sua força faz com que turbinas girem. Esse movimento é então transformado em energia elétrica por meio de geradores. A energia gerada é proporcional ao volume de água e à queda de água disponível.
          Além das grandes hidrelétricas, que envolvem enormes reservatórios, existem as usinas hidrelétricas de pequena escala, que aproveitam o fluxo de rios menores e com menos impacto ambiental.
          </p>
        </LeftSection>
      </MainContent>

      <Section>
        <h3>Benefícios</h3>
        <p>
        A energia hidráulica apresenta uma série de benefícios que a tornam uma das fontes mais importantes e confiáveis de eletricidade no mundo. Um dos principais é sua alta capacidade de geração, permitindo a produção de grandes volumes de energia de forma estável e contínua, ideal para atender às demandas de regiões inteiras. Além disso, as usinas hidrelétricas oferecem a vantagem do armazenamento de energia em seus reservatórios, possibilitando suprir picos de demanda e atuar como fonte de energia backup em situações críticas. Outro destaque é a durabilidade dessas instalações, que possuem uma vida útil longa, frequentemente operando por várias décadas, o que justifica o investimento inicial elevado.</p>
      </Section>

      <Section>
        <h3>Impactos Ambientais</h3>
        <p>
        A energia hidráulica, embora seja uma fonte renovável, traz impactos ambientais significativos. A construção de grandes represas geralmente resulta na submersão de vastas áreas de terra, o que pode causar alterações profundas nos ecossistemas locais, afetando a fauna, a flora e, muitas vezes, deslocando comunidades que habitam essas regiões. Além disso, as mudanças no fluxo natural dos rios podem comprometer a biodiversidade aquática e a qualidade da água. Outro impacto relevante ocorre em represas localizadas em áreas tropicais, onde a decomposição da vegetação submersa libera metano, um gás de efeito estufa com alto potencial de aquecimento global. Esses desafios destacam a importância de um planejamento cuidadoso para minimizar os efeitos ambientais das hidrelétricas.  </p>
      </Section>

      <Section>
        <h3>Acessibilidade em Diferentes Regiões</h3>
        <p>
        A energia hidráulica depende da disponibilidade de grandes corpos de água e de uma topografia favorável. Países como o Brasil, Canadá e China têm vasta experiência com grandes usinas hidrelétricas devido às suas bacias hidrográficas. No entanto, a construção de grandes represas pode ser um desafio em regiões com poucos rios ou onde o impacto ambiental seria muito alto.
        </p>
      </Section>

      <HighlightSection>
        <h3>Explore as Diferenças e Tome uma Decisão Consciente!</h3>
        <p>
        Você sabia que cada fonte de energia tem seus próprios benefícios e desafios? A energia solar é limpa e acessível, mas exige espaço e cuidados com o descarte dos painéis. Já a energia eólica é sustentável e econômica, mas pode impactar a fauna e a paisagem. E a hidráulica, com sua alta capacidade de geração, também traz questões ambientais importantes, como a submersão de terras e emissões de metano em áreas tropicais.</p>
        <Link to="/comparacao">
        Acesse agora a nossa Página de Comparação
        </Link>
      </HighlightSection>
    </Container>
  );
}

export default DetalhesHidraulica;

