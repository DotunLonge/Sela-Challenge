let useUrl;

if (process.env.NODE_ENV === "development") {
  useUrl = process.env.REACT_APP_DEV_SERVER;
} else {
  useUrl =  process.env.REACT_APP_PROD_SERVER;
}

export default {
  useUrl,
  map: {
    googleMapsAPIKey: process.env.REACT_APP_MAP_API_KEY,
    defaultLongitude: 6.465422,
    defaultLatitude: 3.406448,
    defaultZoomLevel: 6 
  }
};
