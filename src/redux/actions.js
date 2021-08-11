

// action creator описує як повинні помінятись дані
// ці actions повинні dispatch-итись
// даний action ми звязуєм з формою, при нажатті на кнопку повиннен добавитись пост

import { CREATE_POST } from "./types";

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}