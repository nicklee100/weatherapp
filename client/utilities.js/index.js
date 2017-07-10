// an easy html5 way to get location

function getLocationHTML5 () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
    console.log(position.coords)
}
