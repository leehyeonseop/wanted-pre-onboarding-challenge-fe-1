import React from "react";
import { DefaultButton } from "./Button.style";

function Button(props) {
    const { disabled } = props;

    return (
        <DefaultButton className={props.className} disabled={disabled}>
            {props.children}
        </DefaultButton>
    );
}

Button.defaulsProps = {
    disabled: true,
};

export default Button;
