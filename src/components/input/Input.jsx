import React from "react";
import { InputData, InputLabel } from "./Input.style";

function Input(props) {
    const { type, id, label, placeholder, register } = props;

    return (
        <div className={props.className}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <InputData
                type={type}
                id={id}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
}

export default Input;
