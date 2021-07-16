import React from "react";
import { PageContainer } from "../Global/GlobalComponents";
import { Projects } from "./ProjectsListConstants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ProjectItem from "./ProjectItem";

function ProjectsList() {
  return (
    <PageContainer>
      <VerticalTimeline>
        {Projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </VerticalTimeline>
    </PageContainer>
  );
}

export default ProjectsList;
