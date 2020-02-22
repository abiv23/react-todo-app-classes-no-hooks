import React, { Component } from 'react';
import styles from './todo-list.module.scss';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.textInput = React.createRef();
    }

    handleSubmit() {
        let inputVal = this.textInput.current.value;
        if(inputVal !== ''){
            this.makeTodo(inputVal);
        }
        this.textInput.current.value = '';
    }

    makeTodo(val){
        const items = [...this.state.todos, val];
        this.setState({
            todos: items
        })
        console.log(items);
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
                    {this.state.todos.length > 0 && this.state.todos.map((item, i)=>{
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