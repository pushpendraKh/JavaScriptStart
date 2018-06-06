import React, { Component } from 'react'
import { createStore } from 'redux'



export default class Redux extends Component {
    render() {

        // Step2 - Create reducer - require reducer and state
        const reducer = (action, state) => {
        // type should be same as type but payload is just a variable
        // you can have data..
        if (action.type === "ATTACK") {
            return action.payload
        }
        if (action.type === "GREEN-ATTACK") {
            return action.payload
        }
        return state
        }
        
        // Step1 - Create Store - require reducer and state
        const store = createStore(reducer, "Peace")
        //Step3 - Subscibe
        store.subscribe(() => {
            console.log("Store is now", store.getState())
        })
        // Step4 -Dispatch Action
        store.dispatch({type: "GREEN-ATwTACK", payload: "HULK Man"})
        store.dispatch({type: "ATTACwK", payload: "Iron Man"})

        return(
            <div> 
                Hey! Hi To Redux.
            </div>
        )
    }

}