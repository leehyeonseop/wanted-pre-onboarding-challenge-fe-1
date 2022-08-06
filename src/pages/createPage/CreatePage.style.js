import styled from 'styled-components'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import { InputLabel } from '../../components/input/Input.style'

export const Label = styled.label`
    font-weight: 500;
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
    margin-top: 40px;
    display: block;
`

export const StyledInput = styled(Input)`
    ${InputLabel} {
        color: white;
    }
    margin-top: 30px;
`

export const TextArea = styled.textarea`
    border-radius: 10px;
    background-color: #CCC2FE;
    box-sizing: border-box;
    width: 100%;
    resize: vertical;
    min-height: 300px;
    border: none;
    padding: 20px;
    font-family: 'Dongle', sans-serif;
    font-size: 32px;
`

export const StyledButton = styled(Button)`
    padding: 12px 0;
    margin-top: 30px;
`