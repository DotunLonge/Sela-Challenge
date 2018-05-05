import React, { Component } from "react";
import GeoSuggest from "react-geosuggest";
import Marker from "../../assets/icons/marker.svg";
import MapView from "./map-view";
import { Wrapper } from "./map-section.style";
import { connect } from "react-redux";

class MapSection extends Component {
  state = {};

  onSuggestSelect = suggest => {
    if (suggest) {
      this.setState({
        center: suggest.location
      });
    }
    this.geoSuggest.hideSuggests();
  };

  render() {
    const { projects, actionType } = this.props;

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
          {actionType !== "FETCH_PROJECTS_FAILED" ? (
            <MapView center={this.state.center} projects={projects} />
          ) : (
            <div className="failed">
              <h1>
                {" "}
                Nothing To Show. <p>Most Likely Server Issues</p>{" "}
              </h1>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.app.projects,
    actionType: state.app.action.type
  };
};

export default connect(mapStateToProps)(MapSection);
