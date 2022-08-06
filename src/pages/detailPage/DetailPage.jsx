import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/backbutton/BackButton'
import Header from '../../components/header/Header'
import MoreButton from '../../components/morebutton/MoreButton'

function DetailPage() {

    const {id} = useParams()
    
    const fetchTodo = async () => {
        const {data} = await axios.get(`http://localhost:8080/todos/${id}`, {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        })
        return data;
    }

    const {isLoading, isError, data, error} = useQuery(["todo"], fetchTodo)

    if(isLoading) {
        return <span>로딩중 ...</span>
    }

    if(isError) {
        return <span>Error : {error.message}</span>
    }

    return (
        <div>
            <Header leftChild={<BackButton />} rightChild={<MoreButton />} />
            <div>{data.data.title}</div>
            <div>{data.data.content}</div>
        </div>
    )
}

export default DetailPage
