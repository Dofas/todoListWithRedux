

// action creator описує як повинні помінятись дані
// ці actions повинні dispatch-итись
// даний action ми звязуєм з формою, при нажатті на кнопку повиннен добавитись пост

import { CREATE_POST, FETCH_POSTS } from "./types";

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}

//action для асинхронних постів

export function fetchPosts(){   
    return async dispatch =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        // закидуєм наш json в reducer
        dispatch({type: FETCH_POSTS, payload: json})
    }
}