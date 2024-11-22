import styled from "styled-components";

export const ComparacaoStyle = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .titulo-inicio {
    text-align: center;
    margin-bottom: 20px;

    h1 {
      font-size: 2.5rem;
      color: #CBE86A;
    }

    p {
      font-size: 1.2rem;
      color: #fff;
    }
  }

  .filtro {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

    select {
      padding: 10px;
      font-size: 1rem;
    }
  }

  .tabela-comparacao {
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;

      th, td {
        border: 1px solid #ddd;
        text-align: center;
        color: #fff;
        padding: 10px;
      }

      th {
        background-color: #132B13;
        color: #CBE86A;
      }
    }
  }

  .grafico, .simulador, .reflexao {
    margin-bottom: 20px;

    h3 {
      font-size: 1.5rem;
      text-align: center;
      color: #fff;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      text-align: center;
      color: #fff;
    }
  }
`;
