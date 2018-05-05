let useUrl;

if (process.env.NODE_ENV === "development") {
  useUrl = "http://localhost:7000";
} else {
  useUrl = "https://server-ndaoxlktcr.now.sh";
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
