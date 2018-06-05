import React, { Component} from 'react';


export default class GeolocationwithPresentation extends Component {

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
      <div>
        <div>Latitude: {this.state.latitude}</div>
        <div>Longitude: {this.state.longitude}</div>
</div> )
}
}