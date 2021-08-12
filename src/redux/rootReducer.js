import { combineReducers } from "redux"
import { appReducer } from "./appReducer"
import { postsReducer } from "./postsReducer"


// комбайним, для того, що розділяти логіку

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})