import React from 'react'
import { CheckBox, P, Title, Wrapper } from './TodoItem.style'

function TodoItem(props) {

    const {todo, onClick} = props

    return (
        <Wrapper className={props.className} onClick={onClick}>
            <Title>
                <strong>{todo.title}</strong>
                <CheckBox />
            </Title>
            <P>{todo.content}</P>
        </Wrapper>
    )
}

export default TodoItem