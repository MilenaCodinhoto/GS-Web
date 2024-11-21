import styled from "styled-components";
import BannerSolar from '../../images/banner-solar.jpg'

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


function DetalhesSolar() {
  return (
    <Container>
      <MainContent>
        <LeftSection>
        <RightSection>
          <img src= {BannerSolar} alt="Energia Solar" />
        </RightSection>
          <p>
          A energia solar fotovoltaica é capturada por meio de células solares (ou painéis solares) que convertem a luz do sol em eletricidade. O processo começa quando os fotões da luz solar atingem a célula solar e excita os elétrons de um material semicondutor, como o silício, criando uma corrente elétrica. Essa corrente é então direcionada para um inversor, que converte a corrente contínua em corrente alternada, utilizável para alimentar residências e empresas.
          Além disso, a energia solar térmica usa coletores solares para aquecer água ou outro fluido, que pode ser utilizado para aquecimento ou até para geração de eletricidade em sistemas de energia solar concentrada.
          </p>
        </LeftSection>
      </MainContent>

      <Section>
        <h3>Benefícios</h3>
        <p>
        A energia eólica traz diversos benefícios para o meio ambiente e a sociedade. Um dos principais é a ausência de emissões de gases de efeito estufa durante a geração de eletricidade, contribuindo para a mitigação das mudanças climáticas. Além disso, por ser uma fonte natural e renovável, o vento é praticamente inesgotável, tornando a energia eólica uma solução sustentável a longo prazo. A flexibilidade dessa tecnologia também é notável: as turbinas podem ser instaladas em pequena escala, atendendo comunidades locais, ou em larga escala, como em parques eólicos, diversificando a matriz energética. Por fim, os avanços tecnológicos reduziram significativamente os custos de geração, tornando-a uma alternativa competitiva frente aos combustíveis fósseis.        </p>
      </Section>

      <Section>
        <h3>Impactos Ambientais</h3>
        <p>
        A energia solar, embora seja uma fonte renovável e limpa, apresenta alguns impactos ambientais que devem ser considerados. A fabricação dos painéis solares pode gerar efeitos negativos devido à extração de minerais e ao uso de produtos químicos em seu processo de produção. Além disso, ao final da vida útil dos painéis, que geralmente dura entre 20 e 25 anos, o descarte inadequado pode resultar em resíduos tóxicos, embora tecnologias de reciclagem estejam sendo desenvolvidas para minimizar esse problema. Outro ponto relevante é o uso de grandes áreas de terra para a instalação de fazendas solares, o que pode interferir em ecossistemas locais, ainda que o impacto seja relativamente menor quando comparado a outras formas de geração de energia.        </p>
      </Section>

      <Section>
        <h3>Acessibilidade em Diferentes Regiões</h3>
        <p>
        A energia solar é eficaz principalmente em áreas com boa incidência de luz solar, como regiões tropicais e desérticas. Países como o Brasil, Índia e partes do Oriente Médio têm um grande potencial solar. Mesmo em países com menor incidência de luz solar, os avanços tecnológicos tornaram a energia solar uma opção viável em climas variados.        </p>
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

export default DetalhesSolar;

