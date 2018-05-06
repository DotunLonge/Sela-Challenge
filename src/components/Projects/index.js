import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { bindActionCreators } from "redux";
import { Wrapper,Spinner } from "./project.style";
import * as sortActions from "../../store/actionCreators/project";
import _ from "lodash";
import colors from "../../helpers/colors.json";

const InProgress = ()=>{
  return (
    <Spinner>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
     
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        <div className="bounce2"></div>
     
      </div>
  </Spinner>
  )
}

const Failed = ()=>{
  return (
    <div>
      <h3> No Projects To Show.</h3>
    </div>
  )
}


class Projects extends React.Component {
  state = {
    projects: [],
    fetchedTriggered: false
  };

  componentWillMount() {
    this.props.actions.fetchAll();
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  
  trackScrolling = () => {
    if(this.props.actionAttempt !== "in-progress"){
      const wrappedElement = document.getElementById('wrapper'); 
      if (this.isBottom(wrappedElement) && this.state.fetchedTriggered === false ) {
        this.props.actions.fetchAll();
        this.setState({ fetchedTriggered: true })
      }else{
        this.setState({ fetchedTriggered: false})
      }
    }
  };

  componentDidMount() {
 
    document.addEventListener('scroll', this.trackScrolling);
 
    this.setState({
      filterOptions: Object.keys(colors).map((colorKey, index) => {
        return (
          <option value={colorKey} key={index}>
            {colorKey}
          </option>
        );
      })
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        projects: nextProps.projects
      });
    }
  }

  handleSort = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;
    const sorted = _.orderBy(this.state.projects, [name], [value]);

    this.setState({
      projects: sorted
    });
  };

  handleFilter = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;

    Object.keys(this.refs).map(key => {
      return (this.refs[key].value = "");
    });

    if (value === "all") {
      return this.setState({
        projects: this.props.projects
      });
    }
    const filtered = _.filter(this.props.projects, [name, value]);
    this.setState({
      projects: filtered
    });
  };


  componentWillUnmount(){
    document.removeEventListener('scroll', this.trackScrolling);
  }

  render() {
    const projects = this.state.projects.map((project, index) => {
      return <Card project={project} key={index} />;
    });

    return (
      <Wrapper id="wrapper">
        <div className="xs-12 " id="projects">
          <h3>All Projects</h3>
        </div>
        <div className="xs-12">
          <ul>
            <li className="xs-12 sm-3">
              <select
                className="blue"
                onChange={this.handleFilter}
                name="projectStatus"
              >
                <option value="" hidden>
                  Project Status
                </option>
                <option value="all">Show All</option>
                {this.state.filterOptions}
              </select>
            </li>

            <li className="xs-12 sm-3" id="sort-by">
              <button id="sort-by">Sort By:</button>
            </li>

            <li className="xs-12 sm-2">
              <select
                className="blue"
                onChange={this.handleSort}
                name="budget"
                ref="budget"
              >
                <option value="" hidden>
                  Budget
                </option>
                <option value="asc">Budget - Asc</option>
                <option value="desc">Budget - Desc</option>
              </select>
            </li>

            <li className="xs-12 sm-2 ">
              <select
                className="blue"
                onChange={this.handleSort}
                name="startDate"
                ref="startDate"
              >
                <option value="" hidden>
                  Start Date
                </option>
                <option value="asc">Start Date - Asc</option>
                <option value="desc">Start Date - Desc</option>
              </select>
            </li>

            <li className="xs-12 sm-2 ">
              <select
                className="blue"
                onChange={this.handleSort}
                name="endDate"
                ref="endDate"
              >
                <option value="" hidden>
                  End Date
                </option>
                <option value="asc">End Date - Asc</option>
                <option value="desc">End Date - Desc</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="xs-12">
          { projects }
          { this.props.actionAttempt === "failed" && <Failed/> }
        </div>

        <div className="xs-12">
          { this.props.actionAttempt === "in-progress" && <InProgress/> }
        </div>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    projects: state.app.projects,
    actionAttempt: state.app.action.attempt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(sortActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
