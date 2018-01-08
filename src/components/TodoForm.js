import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        }
    }

    onChangeHandle(event) {
        this.setState({newItem: event.target.value});
    
    }

    onSubmit(event) {
        event.preventDefault();
        const {newItem} = this.state;
        if (this.state.newItem.length !== 0) {
            this.props.addItem(this.state.newItem);
            this.setState({newItem: ''});
        }
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <form className={style.form} onSubmit={event => this.onSubmit(event)}>
                    <input className={style.Input}
                    type="text"
                    id="newItem"
                    placeholder="Add"
                    onChange={event => this.onChangeHandle(event)}
                    value={this.state.newItem}
                    />
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;