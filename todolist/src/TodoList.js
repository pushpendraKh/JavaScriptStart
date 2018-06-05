import React, { Component } from 'react';
import TodoItems from './TodoItems'
import "./TodoList.css";
import ReactLifeCycle from './ReactLifecycle'
import MessageComponent from './Message'
import Button from './Button'
import StateLessFunctionalButton from './Button1'
import ButtonWithChildren from './Button3'
import GeolocationContainer from './GeolocationContainer'
import { Link } from 'react-router-dom';
import GeoLocationWithPresentation from './GeolocationwithPresentation'
class TodoList  extends Component {

    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items : []
        };
    }

    deleteItem(key){

        var filterItems = this.state.items.filter(item =>  item.key !== key );
        this.setState({
             items:filterItems
        });
    }
    addItem(e){
        if (this._inputElement !== " "){
            var newItem = {
                text:this._inputElement.value,
                key:Date.now()
            };
            this.setState((prevState) => {
                return {items: prevState.items.concat(newItem)
                   };
                });
        }
        this._inputElement.value = "";

        console.log(this.state.items);
     
        e.preventDefault();
    }
    render(){
        console.log("called");
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref = { (a) => this._inputElement = a } placeholder="enter task"> 
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
                <ReactLifeCycle />
                <MessageComponent message = "Ansu Jain" />
                <Button text = "Submit" currency = "$" value = "100" />
                <StateLessFunctionalButton text = "StateLess Function Button component"/>
                <ButtonWithChildren text = "button with children" >
                        <span>Click me!</span>
                </ButtonWithChildren>
                {/* this will throw the warnign in console because text is requird<StateLessFunctionalButton /> */}
                <GeolocationContainer />
                <GeoLocationWithPresentation />
                <Link to="/"><button>Back Home</button></Link>
            </div>
        );
    }
}

export default TodoList;