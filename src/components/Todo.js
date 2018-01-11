import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
    return (
        <div className={style.Todo}>
            <span className={style.SpanTodo} key={props.id}>
                {props.text}
                <button onClick={() => props.removeItem(props.id)}>X</button>
            </span> 
        </div>
    );
}

export default Todo;