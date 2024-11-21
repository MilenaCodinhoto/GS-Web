import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  background-color: #222;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  color: #fff;

  h3 {
    margin: 0;
  }

  p {
    margin: 10px 0;
  }

  a {
    display: inline-block;
    margin-top: 10px;
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

function Card({ title, description, link }) {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>Ver mais</Link>
    </CardContainer>
  );
}

// Adicionando validação de props com PropTypes
Card.propTypes = {
  title: PropTypes.string.isRequired,       // O título é obrigatório e deve ser uma string
  description: PropTypes.string.isRequired, // A descrição é obrigatória e deve ser uma string
  link: PropTypes.string.isRequired,        // O link é obrigatório e deve ser uma string
};

export default Card;
