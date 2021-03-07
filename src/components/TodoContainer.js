import React from 'react';
import ToDolist from './ToDoList'

class TodoContainer extends React.Component{
    state = {
        todos : [
            {
                id : 1,
                title : "set up development environment!",
                completed : true
            },

            {
                id : 2,
                title : "development data and add contet!",
                completed : false
            },

            {
                id : 3,
                title : "depoloy to live server",
                completed : false
            }
        ]
    };

render(){
    return(

        <ul>
            <ToDolist todos={this.state.todos}/> 
        </ul>

    )
};

}//todos will be sent as props to todolist

export default TodoContainer;