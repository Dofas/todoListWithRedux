

// action creator описує як повинні помінятись дані
// ці actions повинні dispatch-итись
// даний action ми звязуєм з формою, при нажатті на кнопку повиннен добавитись пост

import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER,REQUEST_POSTS } from "./types";

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

//action для асинхронних постів

export function fetchPosts(){   

    return {
        type: REQUEST_POSTS
    }

    // без saga
    // return async dispatch =>{
    //     dispatch(showLoader())
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    //     const json = await response.json();
    //     // закидуєм наш json в reducer
    //     dispatch({type: FETCH_POSTS, payload: json})
    //     dispatch(hideLoader())
    // }
}

