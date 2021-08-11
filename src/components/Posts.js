import React from 'react';
import Post from './Post';
import {connect} from 'react-redux'

const Posts = ({syncPosts}) =>{
    if (!syncPosts.length){
        return <p>зеро постів</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

// тут ми працюєм з самим стейтом тому другий параметр в конект може бути нул

const mapStateToProps = state =>{
    // всередині state у нас по ключу posts ( з rootReducer ) знаходиться ввесь наш state
    // console.log('state from map', state)
    return {
        // тепер можем юзати у функції ( по ключу )
        syncPosts: state.posts.posts
    }
}

//конектим шоб компонет забирав дані зі стора

export default connect(mapStateToProps,null)(Posts)