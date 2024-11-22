import { Link } from 'react-router-dom';
import { NavStyle } from '../css/NavStyle';
import LogoImage from '../images/logo-renewableenergytech.png';

const Nav = ({ isDarkMode, toggleTheme }) => {
  return (
    <NavStyle>
      <header className="header">
        <div className="img-logo">
          <img src={LogoImage} alt="Renewable EnergyTech" />
        </div>
        <ul className="nav-menu">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/listafontes">Lista fontes</Link></li>
          <li className="menu-item"><Link to="/comparacao">Comparação</Link></li>
        </ul>
        <button 
          onClick={toggleTheme} 
          className="theme-toggle-button"
          style={{
            padding: '5px 10px',
            marginLeft: '20px',
            background: isDarkMode ? '#444' : '#ddd',
            color: isDarkMode ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </header>
    </NavStyle>
  );
};

export default Nav;
