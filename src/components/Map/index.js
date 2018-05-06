import React, { Component } from "react";
import GeoSuggest from "react-geosuggest";
import Marker from "../../assets/icons/marker.svg";
import MapView from "./map-view";
import { Wrapper,Spinner } from "./map-section.style";
import { connect } from "react-redux";
import { fetchForMaps } from "../../store/actionCreators/project";

const Failed = ()=>{
  return (
    <div className="failed">
    <h1>
      Nothing To Show. <p>Most Likely Server Issues</p>
    </h1>
  </div>
  )
}

const InProgress = ()=>{
  return (
    <div className="in-progress">
     <Spinner >
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
     
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        <div className="bounce2"></div>
     
      </div>
  </Spinner>
    </div>
  )
}

class MapSection extends Component {
  state = {};

  componentWillMount(){
    this.props.dispatch( fetchForMaps() )
  }

  onSuggestSelect = suggest => {
    if (suggest) {
      this.setState({
        center: suggest.location
      });
    }
    this.geoSuggest.hideSuggests();
  };

  render() {
    const { projects, actionAttempt } = this.props;

    return (
      <Wrapper className="xs-12">
        <div className="xs-12" id="search-section">
          <div className="xs-12 sm-3" id="text-column">
            <p>Search Projects By Location</p>
          </div>

          <div className="xs-12 sm-9" id="auto-suggest-column">
            <img src={Marker} id="marker" alt="marker" />
            <GeoSuggest
              ref={el => (this.geoSuggest = el)}
              onSuggestSelect={this.onSuggestSelect}
            />
          </div>
        </div>

        <div className="xs-12" id="map-section">
          <MapView center={this.state.center} projects={projects} />
          { actionAttempt === "in-progress" && <InProgress/> }
          { actionAttempt === "failed" && <Failed/> }
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.app.mapSection.projectDataForMaps,
    actionAttempt : state.app.mapSection.action.attempt
  };
};

export default connect(mapStateToProps)(MapSection);
