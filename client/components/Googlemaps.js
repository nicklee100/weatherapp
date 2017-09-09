import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoogleGeoLocation } from '../actions/index.js'

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.initMap = this.initMap.bind(this)
  }

  initMap() {
    if(!this.props.location.lat  ) {
         let map = new google.maps.Map(this.refs.map, { center: { lat: 36.1699, lng: -115.1398 }, zoom: 12 });
    } else {
      let lat = parseFloat(this.props.location.lat)
      let lng = parseFloat(this.props.location.lng)
      let map = new google.maps.Map(this.refs.map, { center: { lat, lng }, zoom: 12 });
    }
 }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs&callback=initMap')
    this.props.fetchLocation()
  }


  componentDidUpdate() {
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs&callback=initMap')
  }


  render() {
    const mapStyle = {
      width: 1000,
      height: 500,
    };
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return (
        <div>
            <h4>loading...</h4>
         <div ref="map" style={mapStyle}></div>
       </div>
      );
    } else {

      return (
          <div id='map' ref="map"></div>
      );
    }
  }
}

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}


const mapStateToProps = (state) => {
  return {
    location: state.location,
    hasErrored: state.locationHasErrored,
    isLoading: state.locationIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (url) => dispatch(getGoogleGeoLocation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map)
