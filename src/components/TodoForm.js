import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        }
    }

    omChangeHandle(event) {
        this.setState({newItem: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const {newItem} = this.state;
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <form className={style.form} onSubmit={event => this.onSubmit(event)}>
                    <input 
                    type="text"
                    id="newItem"
                    //placeholder="Add"
                    onChange={event => this.onChangeHandle(event)}
                    value={this.state.newItem}
                    />
                    {/* <button>+</button> */}
                </form>
            </div>
        )
    }
}

export default TodoLForm;