import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'
import registerServiceWorker from './registerServiceWorker';


var destination = document.querySelector("#root")
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
// ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
