import React from "react";
import { useForm } from "react-hook-form";
import Error from "../../components/error/Error";
import {
    EmailInput,
    H1,
    PasswordInput,
    StyledButton,
    Wrapper,
} from "./JoinPage.style";
import axios from "axios";

function JoinPage() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "onChange",
    });

    const join = async (data) => {
        const url = "http://localhost:8080/users/create";
        axios
            .post(url, {
                email: data.email,
                password: data.pw,
            })
            .then((res) => localStorage.setItem("token", res.data.token));
    };

    return (
        <Wrapper>
            <H1>회원가입</H1>
            <form onSubmit={handleSubmit(join)}>
                <EmailInput
                    id='email'
                    type='email'
                    label='이메일'
                    placeholder='이메일을 입력해주세요'
                    register={register("email", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                        pattern: {
                            value: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                            message: "*올바른 이메일 형식이 아닙니다.",
                        },
                    })}
                />
                {errors.email && <Error>{errors.email.message}</Error>}

                <PasswordInput
                    id='pw'
                    type='password'
                    label='비밀번호'
                    placeholder='비밀번호를 입력해주세요'
                    register={register("pw", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                        minLength: {
                            value: 8,
                            message: "*8자 이상 입력해주세요.",
                        },
                    })}
                />
                {errors.pw && <Error>{errors.pw.message}</Error>}

                <StyledButton disabled={!isValid}>회원가입</StyledButton>
            </form>
        </Wrapper>
    );
}

export default JoinPage;
