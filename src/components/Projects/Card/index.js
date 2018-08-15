import React from "react";
import { Wrapper, Percentage } from "./card.style";
import { Link } from "react-router-dom";
import location from "../../../assets/icons/location.svg";
import budget from "../../../assets/icons/money.svg";

export default ({ project }) => {
  const percent = project.completionPercentage;

  // create an array of image elements with contractor pictures
  const contractors = project.contractors.map((contractor, index) => {
    return <img src={contractor.avatarUrl} alt="contractor" key={index} />;
  });

  // dollar formatter
  const formatter = number => {
    return "$" + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  };

  // show an alert box of date related information of the project
  const alertOtherInfo = () => {
    alert(
      "Start Date : " +
        new Date(project.startDate) +
        "\n End Date : " +
        new Date(project.endDate)
    );
  };

  return (
    <Wrapper className="xs-12 lg-6" statusColor={project.projectStatus}>
      <div className="inner">
        <div className="xs-12 md-5">
          <div className="projectStatus"> {project.projectStatus} </div>
          <img
            src={project.projectPicture}
            alt="projectPicture"
            className="projectPicture"
          />
          <div className="completionPercentage">
            {percent > 0 && (
              <Percentage id="blue" width={percent}>
                {percent > 50 && percent + "% complete"}
              </Percentage>
            )}

            <Percentage id="normal" width={percent}>
              {percent <= 50 && percent + "% complete"}
            </Percentage>
          </div>
        </div>

        <div className="xs-12 md-7 text-side">
          <h3>{project.name}</h3>
          <div className="location xs-6 lg-5 top">
            <img src={location} alt="location" />
            <span>{project.location.name}</span>
          </div>
          <div className="budget xs-6 lg-7 top">
            <img src={budget} alt="budget" />
            <span>Budget: {formatter(project.budget)}</span>
          </div>

          <div className="xs-12">
            <p className="description">
              {project.description} ...
              <Link to="#">Read more</Link>
            </p>
          </div>

          <div className="xs-12" id="break" />

          <div className="contractors-section xs-12">
            <h4>Contractors</h4>
            {contractors}
            <Link to="#" onClick={alertOtherInfo}>
              View more details
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
