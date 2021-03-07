import React from "react";
import ToDoItem from './ToDoItem';
class ToDolist extends React.Component{

    render(){
        return(
                <ul>
                    {this.props.todos.map(todo =>

                        <ToDoItem key={todo.id} todo={todo}/>//after com back it will be a list
                    )}
                </ul>
        )
    }
}
export default ToDolist;