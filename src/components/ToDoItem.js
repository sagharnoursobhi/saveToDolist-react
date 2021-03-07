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
        <header>
            <input 
            type="checkbox" checked="props.todo.completed"
            onChange={() => this.props.finalHandler(this.props.valueList.id)}
            />
            <li>{this.props.valueList.title}</li>
        </header>
        )
}

}


export default ToDoItem;