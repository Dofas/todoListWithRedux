import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState={
    posts:[],
    fetchedPosts: []
};

// і так в самоу редюсері ми міняєм наш state який залітає у store

// Pure function не мають side effect працюють тільки з вхідними даними
export const postsReducer = (state = initialState, action) => {
    // action створюється тоже окремо в action creator 
    // payload прилітає з action creator
    switch(action.type){
        case CREATE_POST:
            return {...state, posts:state.posts.concat([action.payload])}
            // return {...state, posts:[...state.posts, action.payload]}
        case FETCH_POSTS:
            //коли прилітають пости ми їх закидуєм в фетч, добавляти нічого не будем більше
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
};
