import { SAVE_COMMENT, SET_TITLE } from 'actions/types'; 

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