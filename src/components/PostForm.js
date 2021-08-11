import React from "react";
import './PostForm.css';
import {connect} from 'react-redux';
import { createPost } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ''
    };
  }

  submitHandler = event =>{
    event.preventDefault();
    const {title} = this.state;

    // перевірка на пустий інпут
    if (!title.trim()){
        return
    }

    const newPost = {
        title,
        id: Date.now().toString()
    }
    // тепер ця функція визиває dispatch і тим самим міняє наш state
    this.props.createPost(newPost)
    this.setState({title:''});

  }
  
  handleChangeInput = event =>{
    this.setState(prev=>({...prev,...{
        [event.target.name]: event.target.value
    }}));
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
            <label htmlFor='title'>Назва поста:</label>
            <input 
            className='inputText' 
            type='text' 
            id='title' 
            value={this.state.title}
            name='title'
            onChange={this.handleChangeInput}
            />
        </div>
        <button className='formBtn' type='submit'>Добавити пост</button>
      </form>
    );
  }
}

// так сюда ми впихаєм наші action для взаємодії з класом
// dispatch працює з action
// тут ми грубо кажучи віддали діспатч на пропс, щоб у this.props появилась ф-ція

const mapDispatchToProps = {
    createPost
}

// Зєднюєм наш клас з redux тепер він не dumb component
//переший параметр це для state, в класі ми будем працювати з dispatch a ne state

export default connect(null,mapDispatchToProps)(PostForm)