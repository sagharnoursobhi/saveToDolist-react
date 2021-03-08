import React from 'react';

// class ToDoItem extends React.Component {

//     render(){
//         return(
//             <li>{this.props.todo.title}</li>
//         )
//     }
// }
class ToDoItem extends React.Component{// it is equal to function todoitem(props) and onchange makes the checkbox unclickable
    render(){
    return (
        <>
            <input 
            type="checkbox" checked="this.props.todo.completed"
            onChange={() => this.props.handlerChange(this.props.todo.id)}
            />
            <button onClick={()=>this.props.delToDoProps(this.props.todo.id)}>Delete</button>
            <li>{this.props.todo.title}</li>
        </>
        )
}

}


export default ToDoItem;