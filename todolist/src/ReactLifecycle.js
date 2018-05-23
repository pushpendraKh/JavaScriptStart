import React , { Component } from 'react';


export default class ReactLifeCycle extends Component {

   //methods which get called before page rendering
   //Constructor method is the first method which is called before mounting the component
   //In this we can initialize all the required state variables.This is where we need to assign initial values which can then be used or modified further. 
   constructor(props){
        super(props)
        console.log("constructor");
        this.state = {
            songname:"My favourite song",
            dancemoves:["step1","step2"],
            speakervolume:0,
            emotion: 'nervous'
          };
    }

    //componentWillMount method is called immediately before mounting occurs.
    //it is called before first rendering of the page occurs, setting state in this method will not cause a rerender of page
    componentWillMount(){
        console.log("componenet will mount");
        this.setState({
            speakervolume:5
        })
    }

    //It is called immediately after a component is mounted or page is shown to user and first render call is complete.
    //Similarly if we need to get data from backend using direct ajax calls to server or invoke redux actions we can do it here.When we invoke setState in this method it will cause rerender of the page.
    componenetDidMount(){
        console.log("component did mount");
        // axios.get('someurl/getfurthersteps')
        // .then((response) => {
        //     console.log(response);
        //     this.setState({dancesteps:response})
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

    }

   // It is invoked before a mounted component receives new props.
   //What this essentially means is if we pass some props from parent 
   //class to child class after mounting then this method can be used 
   //to update the state of component based on the props received.
    componentWillReceiveProps(nextProps){
        console.log("component will receive props");
        if(nextProps.applause){
            this.setState({ emotion: "happy" });
          }
    }

    
    //It is invoked before rendering when new props or state are being received. 
    //We can use this method for performance optimizations 
    //and to prevent unnecessary render calls
    shouldComponentUpdate(){
        console.log("Shoud component update");
        return true
    }

    //It is invoked immediately before rendering 
    //when new props or state are being received.
    //We can use this method to compare old props/state
    // variables to newer ones and invoke some function based on those values.
    //It is called every time a re-render is required, such as when setState is called.
    componentWillUpdate(nextProps, nextState){
        if (nextState.speakervolume === 10 && this.state.speakervolume === 9) {
           console.log("updating")
        }
        console.log("component will update");
    }

  ///It is invoked immediately after dom updating occurs.
  // This method is not called for the initial render.
  //We can use this as an opportunity to operate on the DOM when the component has been updated.
  //The most common use case of this method is we use 3rd party libraries like d3.js or charts library
  // like c3.js and we need to update UI library with new data.
  //One of the notable difference between componentDidUpdate and componentWillUpdate
  // is that didUpdate gets old props/state variables as input while willUpdate gets new props/state variables as input.
    componentDidUpdate(prevProps, prevState){
        console.log("component Did update");
    }

    //It is invoked immediately before a component is unmounted and destroyed.
    // Perform any necessary cleanup in this method, such as invalidating timers, 
    //canceling network requests, cleaning up any DOM elements that were created in 
    //componentDidUpdate/componentWillMount or destroy 3rd party UI library elements.
    //If we don’t take the time to remove events we can create memory leaks in our system or 
    //leave bad references lying around.

    componentWillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        return(
            <div > Life Cycle {this.props.dressColor} </div>
        )
    }
}

//defaultProps
ReactLifeCycle.defaultProps = { dressColor: 'red' };

// Methods called during mounting:

// Component.defaultProps
// this.state/constructor
// componentWillMount
// render
// componentDidMount
// Methods called for updating Component:

// componentWillRecieveProps
// shouldComponentUpdate
// componentWillUpdate
// render
// componentDidUpdate
// Methods called during unmounting:

// componentWillUnmount