import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background: linear-gradient(191.14deg, #2A2A2E -5.44%, #2B125A 52.05%, #000000 112.41%);
        min-height: 100vh;
        font-family: 'Dongle', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`;

export const AppWrapper = styled.div`
    @media (min-width : 650px) {
        width: 600px;
    }

    @media (max-width : 650px) {
        width: 80vw;
    }
    min-height: 100vh;
    box-sizing: border-box;
`