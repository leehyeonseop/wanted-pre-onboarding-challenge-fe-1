import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import BackButton from "../../components/backbutton/BackButton";
import Error from "../../components/error/Error";
import Header from "../../components/header/Header";
import MoreButton from "../../components/morebutton/MoreButton";
import { Label, StyledButton, StyledInput, TextArea } from "./CreatePage.style";

function CreatePage() {
    const {
        register,
        handleSubmit,
        formState: { errors, inValid },
    } = useForm();

    const write = async (data) => {
        const url = "http://localhost:8080/todos";
        axios
            .post(
                url,
                {
                    title: data.title,
                    content: data.content,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            )
            .then((res) => console.log(res));
    };

    return (
        <>
            <Header leftChild={<BackButton />} rightChild={<MoreButton />} />
            <form onSubmit={handleSubmit(write)}>
                <StyledInput
                    label='제목'
                    type='text'
                    id='title'
                    placeholder='제목을 입력해주세요.'
                    register={register("title", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                    })}
                />
                {errors.title && <Error>{errors.title.message}</Error>}
                <Label htmlFor='content'>내용</Label>
                <TextArea
                    id='content'
                    {...register("content", {
                        required: {
                            value: true,
                            message: "*필수 입력 값입니다.",
                        },
                    })}
                />
                {errors.content && <Error>{errors.content.message}</Error>}
                <StyledButton>작성</StyledButton>
            </form>
        </>
    );
}

export default CreatePage;
