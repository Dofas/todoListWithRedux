import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import Loader from './Loader';


//звяжем через хуки
// dispatch має йти при кліці на кнопку

const FetchedPosts = () =>{
    // інший спосіб звязати компоненту з action
    const dispatch = useDispatch();
    // получаєм асинхронні пости
    const posts = useSelector(state =>state.posts.fetchedPosts)
    const loading = useSelector(state =>state.app.loading)
    if (loading){
        return <Loader />
    }
    if (!posts.length){
        // на клік визиваєм наш action creator
        return <button onClick={() => dispatch(fetchPosts())}>Load posts</button>
    }
    
    return posts.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts