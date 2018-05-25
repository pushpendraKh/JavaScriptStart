import React , { Component} from 'react';

export default  class MessageComponent extends Component {
    
    render() {
      return (
        <div>{this.props.message}</div>
      );
    }
  
};