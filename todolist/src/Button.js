import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : "Click Me"
        }
    }

    getPrice() {
        return `${this.props.currency}${this.props.value}`
    }
    render() {
        return <button >{this.getPrice()}</button>
    }
}

Button.propTypes = {
    text: PropTypes.string,
};

Button.defaultProps = {
    text: "click me",
}

export default Button;

