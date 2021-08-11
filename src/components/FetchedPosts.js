import React from 'react';
import Post from './Post'

const FetchedPosts = ({posts}) =>{
    if (!posts.length){
        return <button>Load posts</button>
    }
    return posts.map(post => <Post post={post} key={post}/>)
}

export default FetchedPosts