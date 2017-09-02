import React, { Component } from 'react'

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.initMap = this.initMap.bind(this)
  }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs&callback=initMap')
  }

  initMap() {
    console.log(this.refs.map)
    //let map = new google.maps.Map(this.refs.maap.getDOMNode(), {  });
    let map =  new google.maps.Map(this.refs.map, { center: {lat: 42.6303002, lng: -71.2992993}, zoom:12 });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
    };

    return (
      <div ref="map" style={mapStyle}></div>
    );
  }
}

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
