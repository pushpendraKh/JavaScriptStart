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

    render(){
        return(
            <div > Life Cycle {this.props.dressColor} </div>
        )
    }
}

//defaultProps
ReactLifeCycle.defaultProps = { dressColor: 'red' };