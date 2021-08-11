import { CREATE_POST } from "./types";

const initialState={
    posts:[],
    fetchedPosts: []
};

// і так в самоу редюсері ми міняєм наш state який залітає у store

export const postsReducer = (state = initialState, action) => {
    // action створюється тоже окремо в action creator 
    // payload прилітає з action creator
    switch(action.type){
        case CREATE_POST:
            return {...state, posts:state.posts.concat([action.payload])}
            // return {...state, posts:[...state.posts, action.payload]}
        default: return state
    }
};
