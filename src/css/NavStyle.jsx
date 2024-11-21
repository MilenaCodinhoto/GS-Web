import styled from "styled-components";

export const NavStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 10px 20px;

  .logo-menu-container {
    display: flex;
    align-items: center; /* Centraliza verticalmente logo e menu */
    gap: 30px; /* Espaço entre a logo e o menu */
  }

  .img-logo img {
    height: 50px;
  }

  .nav-menu {
    display: flex;
    gap: 20px; /* Espaço entre os itens do menu */
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  .menu-item a {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s;
  }

  .menu-item a:hover {
    color: #49ae44;
  }
`;