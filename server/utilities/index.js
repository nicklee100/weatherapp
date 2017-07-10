export const  returnCoordGoogleGeo = ({data}) =>{
  return data.results[0].geometry.location
}
