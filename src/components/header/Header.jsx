import React from 'react'
import { Left, Right, Wrapper } from './Header.style'

function Header(props) {

    const {leftChild, rightChild} = props

    return (
        <Wrapper>
            <Left>{leftChild}</Left>
            <Right>{rightChild}</Right>
        </Wrapper>
    )
}

export default Header
