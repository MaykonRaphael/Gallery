import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        background: #E51C44;
        font-size: 15px;
        border: 0;
        text-align: center;
        padding: 7px;
        margin-top: 10px;
        color: #DDE3F0;
        border-radius: 7px;
    }
`;