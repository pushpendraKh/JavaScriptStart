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
    children : PropTypes.oneOfType([
        PropTypes.array, PropTypes.element
    ])
}

export default ButtonWithChildren;