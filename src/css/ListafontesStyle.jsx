import styled from "styled-components";

export const ListaFontesStyle=styled.div`
& {
        min-height: calc(100vh - 224px);
}
        
    .container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 50px auto;
    padding: 10px;
    flex-wrap: wrap;
    }

    .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    text-align: center;
    transition: transform 0.3s ease;
    }

    .card:hover {
    transform: scale(1.05);
    }

    .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    }

    .card-content {
    padding: 20px;
    }

    .card-content h2 {
    margin: 0 0 10px;
    color: #333;
    }

    .card-content p {
    font-size: 14px;
    color: #666;
    margin: 0 0 20px;
    }

    .link {
        text-decoration: none;
        color: white;
    }

    .card-content button {
    text-decoration: none;
    background-color: #2b7a3d;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    .card-content button:hover {
    background-color: #1f5a2a;
    }

`