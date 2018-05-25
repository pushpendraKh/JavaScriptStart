import React , { Component } from 'react';
import Geolocation from './Geolocation';

export default class GeolocationContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          latitude: null,
          longitude: null,
        }
    
        this.handleSuccess = this.handleSuccess.bind(this)
      }
    
      componentDidMount() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.handleSuccess)
        }
      }
    
      handleSuccess({ coords }) {
        this.setState({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
      }
    
      render() {
        return (
          <Geolocation {...this.state} />
        )
      }
}

