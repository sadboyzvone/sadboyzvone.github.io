import React from "react";
import { PageContainer } from "../Global/GlobalComponents";
import { Projects } from "./ProjectsListConstants";
import { sortBy, reverse } from "lodash";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Global } from "../../styles/theme";
import ProjectItem from "./ProjectItem";

function ProjectsList() {
  return (
    <PageContainer>
      <VerticalTimeline>
        {reverse(sortBy(Projects, "Year")).map((project) => (
          <ProjectItem project={project} />
        ))}
      </VerticalTimeline>
    </PageContainer>
  );
}

export default ProjectsList;
