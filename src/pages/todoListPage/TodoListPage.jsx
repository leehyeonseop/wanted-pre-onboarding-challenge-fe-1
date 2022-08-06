import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../../components/backbutton/BackButton";
import Header from "../../components/header/Header";
import MoreButton from "../../components/morebutton/MoreButton";
import TodoItem from "../../components/todoItem/TodoItem";
import { TodoList } from './TodoListPage.style';
import { useNavigate } from 'react-router-dom';

function TodoListPage() {
    // const no = () => {
    //     axios.get("http://localhost:8080/todos", {
    //         headers : {
    //             "Authorization" : localStorage.getItem("token")
    //         }
    //     }).then((res) => {
    //         console.log(res.data)
    //         return res.data
    //     })
    // }

    const fetchTodoList = async () => {
        const { data } = await axios.get("http://localhost:8080/todos", {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        return data;
    };

    const { isLoading, isError, data, error } = useQuery(
        ["todos"],
        fetchTodoList,
        {
            refetchOnWindowFocus: true,
            retry: 1,
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (e) => {
                console.log(e.message);
            },
        }
    );

    const navigate = useNavigate()

    if (isLoading) {
        return <span>로딩중 ...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <>
            <Header leftChild={<BackButton />} rightChild={<MoreButton />} />
            <TodoList>
                {data.data && data.data.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <TodoItem todo={todo} onClick={() => navigate(`/detail/${todo.id}`)}/>
                        </li>
                    )
                })}
            </TodoList>

        </>
    );
}

export default TodoListPage;
