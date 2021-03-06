import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { bindActionCreators } from "redux";
import { Wrapper, Spinner } from "./project.style";
import * as sortActions from "../../store/actionCreators/project";
import _ from "lodash";
import colors from "../../helpers/colors.json";

const InProgress = () => {
  return (
    <Spinner>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />

        <div className="bounce2" />
        <div className="bounce3" />
        <div className="bounce2" />
      </div>
    </Spinner>
  );
};

const Failed = () => {
  return (
    <div>
      <h3> No Projects To Show.</h3>
    </div>
  );
};

class Projects extends React.Component {
  state = {
    projects: [],
    fetchedTriggered: false
  };

  componentWillMount() {
    this.props.actions.fetch();
  }

  /*
Detects the bottom of a page
Used to *trigger* a fetch for more projects
  */
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  // tracks scrolling *duh
  trackScrolling = () => {
    if (this.props.actionAttempt !== "in-progress") {
      const wrappedElement = document.getElementById("wrapper");
      if (
        this.isBottom(wrappedElement) &&
        this.state.fetchedTriggered === false
      ) {
        this.props.actions.fetch(this.props.next);
        this.setState({ fetchedTriggered: true });
      } else {
        this.setState({ fetchedTriggered: false });
      }
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    // create dom option elements after page's loaded to be injected into a select element as children
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

  // basically keeps everything as it was, when you decided to execute a function a data manipulating function with side effects
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      let projects;
      if (this.state.filtered) {
        const filtered = _.filter(nextProps.projects, [
          this.state.filterName,
          this.state.filterValue
        ]);
        if (this.state.sorted) {
          projects = _.orderBy(
            this.state.projects,
            [this.state.sortName],
            [this.state.sortValue]
          );
        } else {
          projects = filtered;
        }
        this.setState({ projects });
      } else {
        if (this.state.sorted) {
          projects = _.orderBy(
            nextProps.projects,
            [this.state.sortName],
            [this.state.sortValue]
          );
        } else {
          projects = nextProps.projects;
        }
        this.setState({
          projects
        });
      }
    }
  }

  // lodash sorting because -lodash
  handleSort = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;
    const sorted = _.orderBy(this.state.projects, [name], [value]);

    this.setState({
      projects: sorted,
      sorted: true,
      sortName: name,
      sortValue: value
    });
  };

  // async-ish filter function that updates state with filtered data from a single source of truth, - the props
  handleFilter = e => {
    const name = e.target.getAttribute("name"),
      value = e.target.value;

    // resets the values of all refs in this component to nothing - "" on click
    Object.keys(this.refs).map(key => {
      return (this.refs[key].value = "");
    });

    // if value of calling element is all return all
    if (value === "all") {
      return this.setState({
        projects: this.props.projects,
        filtered: false
      });
    }

    // lodash filter because -lodash
    const filtered = _.filter(this.props.projects, [name, value]);

    this.setState({
      projects: filtered,
      filtered: true,
      filterName: name,
      filterValue: value
    });
  };
  // remove listeners because you have to
  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
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
          {projects}
          {this.props.actionAttempt === "failed" && <Failed />}
        </div>

        <div className="xs-12">
          {this.props.actionAttempt === "in-progress" && <InProgress />}
        </div>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    projects: state.app.projectSection.projects,
    actionAttempt: state.app.projectSection.action.attempt,
    next: state.app.projectSection.projects.length + 4
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(sortActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
