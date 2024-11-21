import { ListaFontesStyle } from '../css/ListafontesStyle'
import {Link} from 'react-router-dom'
import ImgSolar from '../images/lista-solar.jpg'
import ImgEolica from '../images/lista-eolica.jpg'
import ImgHidraulica from '../images/lista-hidraulica.webp'



function ListaFontes() {
  return (
    <ListaFontesStyle>
      <div className="container">
        <div className="card">
          <img
            src= {ImgSolar}
            alt="Energia Solar"
          />
          <div className="card-content">
            <h2>Energia Solar</h2>
            <p>
              A energia solar é gerada a partir da luz do sol, utilizando painéis
              fotovoltaicos para converter a radiação solar em eletricidade. É
              uma fonte limpa, abundante e renovável, ideal para combater as
              mudanças climáticas.
            </p>
            <button><Link to="/listafontes/solar">Ver mais</Link></button>
          </div>
        </div>

        <div className="card">
          <img
            src= {ImgEolica}
            alt="Energia Eólica"
          />
          <div className="card-content">
            <h2>Energia Eólica</h2>
            <p>
              A energia eólica aproveita a força do vento para movimentar
              turbinas que geram eletricidade. É uma das fontes de energia
              renovável mais promissoras, com baixo impacto ambiental e grande
              potencial de produção.
            </p>
            <button><Link to="/listafontes/eolica">Ver mais</Link></button>
          </div>
        </div>

        <div className="card">
          <img
            src= {ImgHidraulica}
            alt="Energia Hidráulica"
          />
          <div className="card-content">
            <h2>Energia Hidráulica</h2>
            <p>
              A energia hidráulica utiliza o movimento da água, geralmente em
              rios ou represas, para gerar eletricidade. É uma das formas mais
              eficientes de energia renovável.
            </p>
            <button><Link to="/listafontes/hidraulica">Ver mais</Link></button>
          </div>
        </div>
      </div>
    </ListaFontesStyle>
  );
}

export default ListaFontes;
