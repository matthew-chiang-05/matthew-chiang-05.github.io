import React from "react";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectsGrid,
  ProjectsTitle,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>My Experiences</ProjectsTitle>
      <ProjectsGrid>
        <ProjectsSection>
          <ProjectImage src="/Photos/DormAlarmPhoto.png"></ProjectImage>
          <ProjectTitle>Smart Security</ProjectTitle>
          <ProjectDescription>
            The Smart Security Tracker is a web application I designed to
            monitor the activity of doors, cabinets, and drawers by connecting
            to a dedicated hardware device. It provides real-time tracking and
            detailed logs of access events.
          </ProjectDescription>
        </ProjectsSection>
        <ProjectsSection>
          <ProjectImage src="/Photos/DormAlarmPhoto.png"></ProjectImage>
          <ProjectTitle></ProjectTitle>
          <ProjectDescription></ProjectDescription>
        </ProjectsSection>
        <ProjectsSection>
          <ProjectImage src="/Photos/DormAlarmPhoto.png"></ProjectImage>
          <ProjectTitle></ProjectTitle>
          <ProjectDescription></ProjectDescription>
        </ProjectsSection>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
