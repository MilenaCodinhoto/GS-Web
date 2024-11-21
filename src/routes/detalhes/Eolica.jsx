import styled from "styled-components";
import BannerSolar from '../../images/banner-eolica.jpg'

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


function DetalhesEolica() {
  return (
    <Container>
      <MainContent>
        <LeftSection>
        <RightSection>
          <img src= {BannerSolar} alt="Energia Solar" />
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

