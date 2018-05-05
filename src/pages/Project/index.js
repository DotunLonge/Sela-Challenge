import React, { Component } from "react";
import GeoSuggest from "react-geosuggest";
import { connect } from "react-redux";
import { add } from "../../store/actionCreators/project";

class Project extends Component {
  state = {
    formObject: {
      contractors: [],
      location: {}
    }
  };

  handleInputChange = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;

    this.setState({
      formObject: {
        ...this.state.formObject,
        [name]: value
      }
    });
  };

  handleLocationChange = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;

    this.setState({
      formObject: {
        ...this.state.formObject,
        location: {
          ...this.state.formObject.location,
          [name]: value
        }
      }
    });
  };

  handleContractorInputChange = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;

    this.setState({
      contractor: {
        ...this.state.contractor,
        [name]: value
      }
    });
  };

  addContractor = e => {
    this.setState({
      formObject: {
        ...this.state.formObject,
        contractors: [
          ...this.state.formObject.contractors,
          this.state.contractor
        ]
      }
    });
  };

  onSuggestSelect = suggest => {
    if (suggest) {
      this.setState({
        formObject: {
          ...this.state.formObject,
          location: {
            name: suggest.label,
            ...suggest.location
          }
        }
      });
    }
    this.geoSuggest.hideSuggests();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(add(this.state.formObject));
  };

  render() {
    const list = this.state.formObject.contractors.map((contractor, index) => {
      return (
        <li key={index}>
          {" "}
          Name: {contractor.name} , avatar: {contractor.avatarUrl}
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label>Name: {this.state.formObject.name}</label> <br />
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>Keyword: {this.state.formObject.keyword}</label> <br />
            <input
              type="text"
              name="keyword"
              placeholder="Project Keyword"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>Budget: {this.state.formObject.budget}</label> <br />
            <input
              type="number"
              name="budget"
              placeholder="Project Budget"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>Start Date: {this.state.formObject.startDate}</label> <br />
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>End Date: {this.state.formObject.endDate}</label> <br />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>
              Project Picture: {this.state.formObject.projectPicture}
            </label>{" "}
            <br />
            <input
              type="text"
              name="projectPicture"
              placeholder="Project Picture"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>Description: {this.state.formObject.description}</label>
            <br />
            <textarea
              name="description"
              placeholder="Project Description"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label>
              Completion Percentage:{" "}
              {this.state.formObject.completionPercentage}
            </label>
            <br />
            <input
              name="completionPercentage"
              placeholder="Project Percentage Of Completion"
              type="number"
              onChange={this.handleInputChange}
            />
          </div>

          <p>Project Status: {this.state.formObject.projectStatus} </p>

          <div className="form-control">
            <select
              name="projectStatus"
              placeholder="Project Status"
              type="text"
              onChange={this.handleInputChange}
            >
              <option value="Initiated"> Initiated </option>
              <option value="Completed"> Completed </option>
              <option value="Not Initiated"> Not Initiated </option>
              <option value="Completed"> Defaulted </option>
              <option value="On track to be defaulted">
                {" "}
                On track to be defaulted{" "}
              </option>
              <option value="On track to be completed">
                {" "}
                On track to be completed{" "}
              </option>
            </select>
          </div>

          <hr />

          <div>
            <GeoSuggest
              ref={el => (this.geoSuggest = el)}
              onSuggestSelect={this.onSuggestSelect}
            />
          </div>

          <hr />

          <h4>Contractors</h4>
          <ul>{list}</ul>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Contractor Name"
              onChange={this.handleContractorInputChange}
              required
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="avatarUrl"
              placeholder="Contractor Avatar"
              onChange={this.handleContractorInputChange}
              required
            />
          </div>

          <input
            type="button"
            onClick={this.addContractor}
            value="Add A Contractor"
          />
          <hr />

          <input type="submit" value="submit" />
        </form>

        <p style={{ color: this.props.attempt === "failed" ? "red" : "blue" }}>
          {" "}
          {this.props.message}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.app.action.message,
    attempt: state.app.action.attempt
  };
};

export default connect(mapStateToProps)(Project);
