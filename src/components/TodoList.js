import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
    return (
        <div className={style.TodoList}>
            {props.list.map((item) => {
                return (
                    <span className={style.SpanTodoList} key={item.id}>
                        {item.text}
                        <button onClick={() => props.removeItem(item.id)}>X</button>
                    </span> 
                )
            })}
        </div>
    );
}

export default TodoList;