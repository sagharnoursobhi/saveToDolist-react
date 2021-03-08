import React , {Component} from 'react';//makes us able to use Component instead of extends.Component and put the component directly in todocontainer.ja

class InputToDo extends Component {

   onChange = e =>{
       console.log('hello');
   }
    render(){
        return(//value is used for text input
            <form>
                <input type="text" placeholder="Add Todo..."
                onChange ={this.onChange}
                />
                <button type="button">Enter</button>
            </form>
        )
    }
}

export default InputToDo