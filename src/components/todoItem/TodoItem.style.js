import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #3C1F7B;
    border-radius: 8px;
    padding: 10px;
    min-height: 200px;
    cursor: pointer;
`

export const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 100%;
    color: white;
    display: block;
    border-bottom: 1px solid #C68AFF;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

export const CheckBox = styled.input.attrs({
    type : "checkbox"
})`

`

export const P = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: white;
    padding-top: 10px;
`