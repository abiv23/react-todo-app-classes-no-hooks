import React, { Component, createRef } from 'react';
import styles from './todo-list.module.scss';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.textInput = createRef(null);
    }

    handleSubmit() {
        let inputVal = this.textInput.current.value;
        if(inputVal !== ''){
            this.setState({todos: [...this.state.todos, inputVal]});
        } else {
            alert('no empty todos!')
        }
        this.textInput.current.value = '';
    }

    render(){
        return (
            <>
                <div className={styles.todoWrapper}>
                    <input 
                        type="text"
                        ref={this.textInput}
                        placeholder='add your todo here...'/>
                    <button onClick={() => this.handleSubmit()}>{this.props.buttonText}</button>
                </div>
                <ul>
                    {this.state.todos.map((item, i)=>{
                        return (
                            <li key={i + item}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default TodoList