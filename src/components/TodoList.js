import React from 'react';
import style from './TodoList.css';
import Todo from '../components/Todo.js';

const TodoList = (props) => {
    return (
        <div className={style.TodoList}>
            {props.list.map((item) => {
                return <Todo id={item.id} text={item.text} removeItem={() => props.removeItem(item.id)} />
            })}
        </div>
    );
}

export default TodoList;