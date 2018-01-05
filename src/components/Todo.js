import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
    return (
        <div className={style.Todo}>
            <span className={style.SpanTodoList} key={item.id}>
                {item.text}
                <button onClick={() => props.removeItem(item.id)}>X</button>
            </span> 
        </div>
    );
}

export default Todo;