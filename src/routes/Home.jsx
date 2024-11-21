import { HomeStyle } from '../css/HomeStyle'
import Banner from '../images/banner-renovavel.jpg'
import CardSolar from '../images/categoria-solar.png'
import CardEolica from '../images/categoria-eolica.png'
import CardHidraulica from '../images/categoria-hidraulica.png'
import ImageText from '../images/energia-renovavel-artigo.jpg'
import ImageTextTwo from '../images/energia-renovavel-artigo2.jpg'
import ImageLight from '../images/estilo-lampada.png'
import ImageNotice from '../images/noticia-renovavel1.png'
import ImageNoticeTwo from '../images/noticia-renovavel2.png'
import ImageNoticeThree from '../images/noticia-renovavel3.png'
import ImageNoticeFour from '../images/noticia-renovavel4.png'

const Home = () => {
    return (
        <HomeStyle>
            <div className="container">
                <div className="banner">
                    <img className='banner-image' src={Banner} alt="Banner" />
                </div>
                
                <section className="cards">
                    <img className='info-card' src={CardSolar} alt="Energia Solar" />
                    <img className='info-card' src={CardEolica} alt="Energia Eólica" />
                    <img className='info-card' src={CardHidraulica} alt="Energia Hidruálica" />
                </section>

                <section className="info">
                    <div className="text-content">
                        <h2>O que é energia renovável?</h2>
                        <p>A energia renovável é gerada a partir de fontes naturais que se renovam constantemente, como o sol, o vento e a água. Ela é essencial para combater as mudanças climáticas, reduzir a poluição e promover um futuro sustentável. Além de ser limpa, é uma solução viável para levar eletricidade a regiões remotas, contribuindo para o desenvolvimento global e a preservação do meio ambiente.</p>
                    </div>
                    <img className='img-info' src={ImageText} alt="O que é energia renovavel?" />
                </section>

                <section className="info2">
                    <div className="text-content2">
                        <h2>Por que isso importa?</h2>
                        <p>O acesso à energia transforma vidas. Ele permite iluminar salas de aula, abastecer hospitais e impulsionar economias locais. Sem energia, comunidades enfrentam desafios diários que limitam seu progresso e qualidade de vida. Tornar a energia acessível e sustentável para todos é um passo essencial para reduzir desigualdades e garantir um futuro mais justo e próspero.</p>
                    </div>
                    <img className='img-info2' src={ImageTextTwo} alt="O que é energia renovavel?" />
                </section>

                <section className="info3">
                    <div className="text-content3">
                        <h2>INOVAÇÃO & SUSTENTABILIDADE</h2>
                        <h3>1. O Papel da Inovação na Energia Renovável</h3>
                        <p>A inovação está revolucionando o setor de energia renovável. Tecnologias como turbinas eólicas inteligentes, painéis solares de alta eficiência e sistemas avançados de armazenamento de energia estão ampliando o acesso a fontes limpas, tornando-as mais viáveis e econômicas para o mundo todo.</p>

                        <h3>2. Redução de Impactos Ambientais</h3>
                        <p>Ao priorizar fontes limpas, como solar e eólica, a energia renovável reduz a dependência de combustíveis fósseis, minimizando emissões de carbono e poluição. Isso promove um modelo de desenvolvimento sustentável que preserva os recursos naturais para as futuras gerações.</p>

                        <h3>3. Sustentabilidade Econômica e Social</h3>
                        <p>As energias renováveis criam oportunidades para economias locais, gerando empregos e fornecendo energia acessível a comunidades remotas. Além disso, a descentralização da energia fortalece a segurança energética e impulsiona o desenvolvimento regional.</p>

                        <h3>4. Energia Renovável como Motor da Economia Sustentável</h3>
                        <p>Além de ser uma alternativa limpa, a energia renovável impulsiona a economia ao gerar empregos verdes e atrair investimentos em infraestrutura sustentável. Esse movimento promove um equilíbrio entre desenvolvimento econômico e preservação ambiental.</p>
                    </div>
                    <img className='img-info3' src={ImageLight} alt="Lampada" />
                </section>
                
                <section className="noticias-card">
                    <h2>NOTÍCIAS</h2>
                    <div className="notice-container">
                        <div className="notice-info">
                            <img className="notice-image" src={ImageNotice} alt="Imagem Notícia" />
                            <div className="notice-overlay">
                                <h3 className="notice-title">
                                    Data centers movimentam R$ 7,7 bi em contratos de energia renovável no Brasil
                                </h3>
                                <p className="notice-description">
                                    Montante corresponde a 330 MWmédios negociados no mercado livre de energia 
                                    nos últimos três anos, mostra levantamento da CELA.
                                </p>
                            </div>
                        </div>

                        <div className="notice-info">
                            <img className="notice-image" src={ImageNoticeTwo} alt="Imagem Notícia" />
                            <div className="notice-overlay">
                                <h3 className="notice-title">
                                Brasil x EUA: O potencial do mercado de energia renovável nas operações de M&As
                                </h3>
                                <p className="notice-description">
                                Medidas estratégicas adotadas contribuem para que o setor se consolide como um dos mais dinâmicos deste século
                                </p>
                            </div>
                        </div>

                        <div className="notice-info">
                            <img className="notice-image" src={ImageNoticeThree} alt="Imagem Notícia" />
                            <div className="notice-overlay">
                                <h3 className="notice-title">
                                Quase metade das empresas ainda não utiliza energias renováveis, diz estudo
                                </h3>
                                <p className="notice-description">
                                As principais empresas do mundo estão aquém do uso de energias renováveis, com quase metade não utilizando eletricidade gerada a partir de fontes limpas, como solar e eólica, mostra um novo relatório divulgado pela CDP
                                </p>
                            </div>
                        </div>

                        <div className="notice-info">
                            <img className="notice-image" src={ImageNoticeFour} alt="Imagem Notícia" />
                            <div className="notice-overlay">
                                <h3 className="notice-title">
                                    Brasil terá plataforma de certificação de energia renovável...
                                </h3>
                                <p className="notice-description">
                                Iniciativa busca aumentar o percentual de energia renovável certificada no Brasil; objetivo é alcançar até 50%...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </HomeStyle>
    )
}

export default Home