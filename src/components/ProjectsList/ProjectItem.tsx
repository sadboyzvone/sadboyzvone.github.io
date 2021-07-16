import React from "react";
import PropTypes from "prop-types";
import { Global } from "../../styles/theme";
import { TimelineElement } from "../WorkTimeline/WorkTimelineComponents";
import { Project } from "./ProjectListTypes";
import { AiFillCode } from "react-icons/ai";

function ProjectItem({ project }: { project: Project }) {
  const getIcon = (project: Project) => {
    if (project) {
      if (project.Technologies) {
        const hasIcon = project.Technologies.filter(
          (itm) => itm.Icon !== undefined
        );

        return hasIcon[0].Icon;
      }
    }
    return AiFillCode;
  };

  return (
    <TimelineElement
      key={project.Name}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: Global.colors.background.primary,
        color: Global.colors.text.primary,
        border: `1px solid ${Global.colors.text.primary}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${Global.colors.text.primary}`,
      }}
      date={project.Year.toString()}
      icon={React.createElement(getIcon(project))}
      iconStyle={{
        background: Global.colors.background.primary,
        color: Global.colors.text.primary,
      }}
    >
      <h3 className="vertical-timeline-element-title">
        {project.URL ? (
          <a href={project.URL} target="_blank" rel="noopener noreferrer">
            {project.Name}
          </a>
        ) : (
          project.Name
        )}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">{project.Client}</h4>
      <p>
        {project.Image && <img src={project.Image} alt={project.Name} />}
        <div className="technologies">
          {project.Technologies &&
            project.Technologies.map((t) => {
              return React.createElement(t.Icon);
            })}
        </div>
        {project.Description}
        {project.Testimonial && (
          <div>
            <span>"{project.Testimonial}"</span>
          </div>
        )}
      </p>
    </TimelineElement>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
