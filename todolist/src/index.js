import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

var destination = document.querySelector("#root")
  
ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={App} />
        <Route path="/list" component={TodoList} />
            
        </div>
    </Router>,
    destination
);
// ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
