import axios from 'axios'
import { SAVE_COMMENT, SET_TITLE, FETCH_COMMENTS } from 'actions/types'; 

export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function setTitle(title){
    const newTitle = title+='!!!'
    return{
        type: SET_TITLE,
        payload: newTitle
    }
}

export function fetchComments(){
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')

    return{
        type: FETCH_COMMENTS,
        payload: response
    }
}