
let  useUrl;

if(process.env.NODE_ENV === "development"){
  useUrl = "http://localhost:7000"
}else{
  useUrl = "http://sela.fr.openode.io"
}

export default {
  useUrl,
  map: {
    googleMapsAPIKey: process.env.REACT_APP_MAP_API_KEY,
    defaultLongitude: 131.044,
    defaultLatitude:   -25.363,
    defaultZoomLevel: 6
}
}
