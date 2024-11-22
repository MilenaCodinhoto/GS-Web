import styled from "styled-components";
import BannerEolica from '../../images/banner-eolica.jpg'
import ButtonBack from '../../images/botao-voltar.png'
import { useNavigate } from "react-router-dom"


const Container = styled.div`
  color: #fff;
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
`

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
`

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

function DetalhesEolica() {
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
          <img className="banner-image" src= {BannerEolica} alt="Energia Eólica" />
          </div>
        </RightSection>
          <p>
          A energia eólica é gerada a partir do movimento do vento, que faz com que as lâminas das turbinas eólicas girem. O movimento das lâminas é convertido em energia mecânica, que, por sua vez, é transformada em eletricidade por um gerador. A quantidade de energia gerada depende da velocidade do vento, e é por isso que as turbinas precisam ser posicionadas em locais onde o vento é constante e forte. O vento movimenta as lâminas, e essa rotação é capturada pelo gerador.
          Turbinas eólicas podem ser de dois tipos principais: onshore (instaladas em terra) ou offshore (instaladas no mar, onde os ventos são mais fortes e constantes). A energia gerada pode ser enviada para a rede elétrica ou armazenada para uso posterior.
          </p>
        </LeftSection>
      </MainContent>

      <Section>
        <h3>Benefícios</h3>
        <p>
        A energia eólica oferece uma série de benefícios significativos para o meio ambiente e para a economia. Um dos principais é a ausência de emissões de gases de efeito estufa durante a geração de energia, o que ajuda a combater as mudanças climáticas. Além disso, por ser uma fonte renovável, o vento é praticamente inesgotável, garantindo sustentabilidade a longo prazo. Outro ponto importante é a flexibilidade de instalação: turbinas eólicas podem ser utilizadas tanto em pequena escala, para atender comunidades locais, quanto em grande escala, em parques eólicos que diversificam a matriz energética. Por fim, os avanços tecnológicos têm reduzido consideravelmente os custos de geração, tornando a energia eólica uma opção cada vez mais acessível e competitiva em relação aos combustíveis fósseis.        
        </p>
      </Section>

      <Section>
        <h3>Impactos Ambientais</h3>
        <p>
        A energia eólica, apesar de seus inúmeros benefícios, apresenta alguns impactos ambientais que precisam ser avaliados. O ruído gerado pelas turbinas pode ser um incômodo para comunidades próximas, especialmente em áreas residenciais. Além disso, há preocupações com a fauna local, pois aves e morcegos podem colidir com as pás das turbinas, embora estejam sendo desenvolvidas tecnologias para mitigar esses impactos. Outro aspecto relevante é a alteração da paisagem, já que grandes parques eólicos podem modificar significativamente o visual de áreas naturais, o que pode afetar ecossistemas locais e até influenciar o turismo em certas regiões. Esses desafios destacam a importância de um planejamento cuidadoso ao implementar projetos de energia eólica.  
        </p>
      </Section>

      <Section>
        <h3>Acessibilidade em Diferentes Regiões</h3>
        <p>
        A energia eólica é mais eficaz em regiões com ventos fortes e constantes, como áreas costeiras, zonas de planícies ou ilhas. Países como os Estados Unidos, Dinamarca, Alemanha e China têm investido fortemente em energia eólica devido ao potencial do vento nessas regiões.        
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

export default DetalhesEolica;

