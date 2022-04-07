import styled, { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    body {
        background-color: rgb(18, 18, 20);
    };

    a {
        text-decoration: none;
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
`;