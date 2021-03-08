import React from "react";
import ToDoItem from './ToDoItem';
class ToDolist extends React.Component{

    render(){
        return(
            <ul>
                {this.props.todos.map(todo=>
                    <ToDoItem key={todo.id} todo={todo} handlerChange={this.props.handlerChange} 
                    delToDoProps={this.props.delToDoProps}
                    />
                )}
            </ul>
        )
    }
}
export default ToDolist;