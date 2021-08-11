import React from "react";
import './PostForm.css'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ''
    };
  }

  submitHandler = event =>{
    event.preventDefault();
    const {title} = this.state;

    const newPost = {
        title,
        id: Date.now().toString()
    }
    this.setState({title:''})
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
