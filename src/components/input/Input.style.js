import styled from 'styled-components';

export const InputLabel = styled.label`
    font-weight: 500;
    font-size: 24px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
`

export const InputData = styled.input`
    font-family: 'Dongle', sans-serif;
    font-size: 32px;
    color: white;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
    width: 100%;
    background-color: inherit;
    box-sizing: border-box;
    ::placeholder {
        font-family: 'Dongle', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #dbdbdb;
    }

    &:focus-within {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: solid 1px #f26e22;
    }
`