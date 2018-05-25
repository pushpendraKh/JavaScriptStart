import PropTypes from 'prop-types';
import React from 'react';


//One thing that makes the stateless functional components different from their stateful
// counterparts is the fact that this does not represent the component during their execution.
//For this reason it is not possible to use functions like setState or 
//lifecycle methods that are associated with the component instance.
//The stateless functional components only receive props (and context), and they return the elements. 
//This should remind  of the principles of Functional Programming .

//Stateless functional components do not provide any lifecycle hooks such as componentDidMount; 
//they just implement a render-like method, and everything else has to be handled by the parent.
/**
    * A generic button with text.
    */
const StateLessFunctionalButton = (props) => {
    return( <div>
             <button> { props.text} </button>
             </div>

    )
}

StateLessFunctionalButton.propTypes ={
    /**
      * The text of the button.
      */
    text : PropTypes.string.isRequired
}

export default  StateLessFunctionalButton;