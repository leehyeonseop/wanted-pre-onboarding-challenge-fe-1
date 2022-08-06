import styled from 'styled-components';

export const DefaultButton = styled.button`
    font-family: 'Dongle', sans-serif;
    width: 100%;
    border: none;
    border-radius: 12px;
    background-color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    text-align: center;
    color: black;
    cursor: pointer;
    :disabled {
        cursor: default;
        background-color: lightgray;
    }
`