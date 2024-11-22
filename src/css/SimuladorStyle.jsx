import styled from 'styled-components';

export const SimuladorStyle = styled.div`
    .simulador {
        margin: 2rem;
        padding: 2rem;
        background-color: #132B13;
        border-radius: 8px;
    }

    h3 {
        color: #2e8b57;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .simulator-form {
        display: flex;
        flex-direction: column; 
        gap: 1rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        margin: 20px;
        gap: 0.5rem;
    }

    label {
        font-weight: bold;
        color: #fff;
    }

    input, select {
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    button {
        background-color: #2e8b57;
        color: white;
        padding: 0.8rem;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #1d6a42;
        }
    }

    .resultado {
        margin-top: 2rem;
        padding: 1rem;
        background-color: #e0f7e8;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color: #2e8b57;
        font-weight: bold;
    }
`;
