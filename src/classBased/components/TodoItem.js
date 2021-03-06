import React from "react"
//styles
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    handleUpdateDone = event => {
        if (event.key === "Enter") {
            this.setState({editing: false})
        }
    }
    componentWillUnmount() {
        console.log("Cleaning up...")
    }
    render() {
        const completedStyles = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        let viewMode = {};
        let editMode = {};
        const { completed, id, title} = this.props.todo
        if (this.state.editing){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        onChange={
                            () => this.props.handleChangeProps( id )
                        }
                    />
                    <button 
                        onClick={
                            () => this.props.deleteTodoProps( id )
                        }>
                            Delete
                    </button>
                    <span style={completed ? completedStyles : null}>
                        {title}
                    </span>
                </div>
                <input 
                    type="text" 
                    style={editMode} 
                    className={styles.textInput}
                    value={title}
                    onChange={e => {
                        this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}

export default TodoItem