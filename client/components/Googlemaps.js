import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoogleGeoLocation } from '../actions/index.js'

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.initMap = this.initMap.bind(this)
  }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs&callback=initMap')
    this.props.fetchData()
  }


  componentDidUpdate() {
    console.log('Componente Updated', this.props)
    //loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs&callback=initMap')
  }

  initMap() {
    //let map = new google.maps.Map(this.refs.maap.getDOMNode(), {  });
    let map = new google.maps.Map(this.refs.map, { center: { lat: 42.3601, lng: -71.0589 }, zoom: 12 });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
    };
    console.log('7777', this.props)
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading === false) {
        return <p>not Loading…</p>;
    } else {

      return (
        <div>
         <div ref="map" style={mapStyle}></div>
       </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(getGoogleGeoLocation())
  };
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    hasErrored: state.locationHasErrored,
    isLoading: state.locationIsLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map)
