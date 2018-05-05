
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
    defaultLongitude: process.env.REACT_APP_MAP_DEFAULT_LNG,
    defaultLatitude: process.env.REACT_APP_MAP_DEFAULT_LAT,
    defaultZoomLevel: process.env.REACT_APP_MAP_DEFAULT_ZOOM
  }
}
