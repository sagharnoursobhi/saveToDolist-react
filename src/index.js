import React from 'react';
import ReactDom from 'react-dom';
import TodoContainer from './components/TodoContainer.js'
// const element = <h1>hello react</h1>;

// ReactDom.render(element , document.getElementById('root'));
ReactDom.render(<TodoContainer/>, document.getElementById('root'));
//to see the warnings in console we use React.strictmode around the component into the DOM