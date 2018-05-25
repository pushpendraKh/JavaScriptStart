import React from 'react';
import PropTypes from 'prop-types';


const ButtonWithChildren = ({children}) => {
    return(
        <div>
             <button className="btn"> { children } </button>
        </div>
        )
}

ButtonWithChildren.propTypes = {
    children : PropTypes.array
}

export default ButtonWithChildren;