import React from 'react';
import ToDolist from './ToDoList'
import Header from './Header';

class TodoContainer extends React.Component{
    state = { //first method which is a state data
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
    onchangeHandler = (id) =>{ //second method which is a handler
        console.log('clicked' , id)
    };//making todocontainer as a handler event to communicate with todoitem(raiser)

render(){
    return(

        <ul>
            <Header/>
            <ToDolist valueList={this.state.todos} onchangeMethod={this.onchangeHandler}/> 
        </ul>

    )
};

}//todos will be sent as props to todolist

export default TodoContainer;