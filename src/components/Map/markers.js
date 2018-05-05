import React from "react";
import colors from "../../helpers/colors";

import { Marker } from "./map-view.style";
let counter = 0;

export default (projects) => {
return projects.map((project,index)=>{
    counter = counter + 1;
    if( counter >= colors.length ) counter = 0;
    const width = project.keyword.length * 13;

    return <Marker
    key={index}
    lat = {project.location.lat}
    lng = {project.location.lng}
    markerWidth={width}
    backgroundColor = {colors[project.projectStatus]}>
    <span id="arrow" />
      {project.keyword}
    </Marker>
  })
}