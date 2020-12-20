import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "8px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }



    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input style={inputStyle} type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//*Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    outline: "none"
}

const inputStyle = {
    marginRight: "10px"
}

export default TodoItem
