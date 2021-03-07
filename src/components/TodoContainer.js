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
    onchangeHandler = id =>{ //second method which is a handler...
        this.setState( prevState=>(    //a loop going through the state ids
            {
                todos: prevState.todos.map(todo =>{
                    if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                    return todo
                }
                return todo
            }),
          }));
                //making todocontainer as a handler event to communicate with todoitem(raiser)

render(){
    return(

        <ul>
            <Header/>
            <ToDolist todos={this.state.todos} onchangeMethod={this.onchangeHandler}/> 
        </ul>

    )
};

}
}

export default TodoContainer;