import React from 'react';
import {Component} from 'react'//makes us able to use Component instead of extends.Component and put the component directly in todocontainer.ja

class InputToDo extends Component {

    state = {
        a:''
    }

   onChange = e =>{
       this.setState(
           
            {
                [e.target.name] : e.target.value
            }
           
       )
   }

   handleSubmit = e => {
       
            e.preventDefault();//cancel the default action of submit type
           console.log(this.state.a)
       
   }
    render(){
        return(//value is used for text input
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Todo..."
                onChange ={this.onChange} 
                name="a"
                />
                <button>Enter</button>
            </form>
        )
    }
}

export default InputToDo