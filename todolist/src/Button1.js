import PropTypes from 'prop-types';
import React from 'react';


const StateLessFunctionalButton = (props) => {
    return( <div>
             <button> { props.text} </button>
             </div>

    )
}

StateLessFunctionalButton.propTypes ={
    text : PropTypes.string,
}

export default  StateLessFunctionalButton;