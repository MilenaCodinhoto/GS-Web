import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
import LogoImage from '../images/logo-renewableenergytech.png'

const Nav =()=>{
      return(
          <NavStyle>       
          <header className="header">
            <div className='img-logo'>
              <img src={LogoImage} alt="Renewable EnergyTech" />
            </div>
            <ul className="nav-menu">
              <li className="menu-item"><Link to="/">Home</Link></li>
              <li className="menu-item"><Link to="/sobre">Lista fontes</Link></li>
              <li className="menu-item"><Link to="/solucao">Comparação</Link></li>
            </ul>
          </header>
          </NavStyle>
      )
  }
  
  export default Nav