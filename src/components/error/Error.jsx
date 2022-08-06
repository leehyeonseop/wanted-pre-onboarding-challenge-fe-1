import React from "react";
import { Message } from './Error.style';

function Error(props) {
    return <Message className={props.className}>{props.children}</Message>
}

export default Error;
