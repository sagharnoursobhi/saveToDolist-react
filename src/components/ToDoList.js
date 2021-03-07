import React from "react";
import ToDoItem from './ToDoItem';
class ToDolist extends React.Component{

    render(){
        return(
            <ul>
                {this.props.valueList.map(todo=>
                    <ToDoItem key={todo.id} valueList={todo} finalHandler={this.props.onchangeMethod}/>
                )}
            </ul>
        )
    }
}
export default ToDolist;