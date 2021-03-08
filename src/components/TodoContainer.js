import React from 'react';
import ToDolist from './ToDoList'
import Header from './Header';
import InputToDo from "./InputToDo";

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
                }
                return todo //return the found todo with all previos properties values except completed:!completed
            }),
          }))
        };
                //making todocontainer as a handler event to communicate with todoitem(raiser)
        delToDo = id =>{
            this.setState({
            todos :[ ...this.state.todos.filter(todo=>{
                return todo.id !== id;// pay attention to the condition part
            })

            ]
        })}
render(){
    return(

        <ul>
            <InputToDo/>
            <Header/>
            <ToDolist todos={this.state.todos} handlerChange={this.onchangeHandler} delToDoProps={this.delToDo}/> 
        </ul>

    )
};

}


export default TodoContainer;