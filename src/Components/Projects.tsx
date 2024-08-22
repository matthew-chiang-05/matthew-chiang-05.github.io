import React from "react";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectsTitle,
  ProjectTexts,
  LeftButton,
  ProjectImageContainer,
} from "./ProjectsStyles";
import { useState } from "react";
import { RightButton } from "./ProjectsStyles";

const Projects = () => {
  const projectsData = [
    {
      title: "Smart Security",
      description:
        "The Smart Security Tracker is a web application I designed to monitor the activity of doors, cabinets, and drawers by connecting to a dedicated hardware device. It provides real-time tracking and detailed logs of access events.",
      images: ["/Photos/DormAlarm1.png", "/Photos/DormAlarm2.png"],
    },
    {
      title: "SocialSync",
      description:
        "SocialSync is a full stack social media application built using FastApi. It's features an Oauth2 user authentication system, a PostgreSQL database, and methods to handle users, posts, likes, friends, and messaging. ",
      images: [
        "/Photos/SocialSync1.png",
        "/Photos/SocialSync2.png",
        "/Photos/SocialSync3.png",
        "/Photos/SocialSync4.png",
      ],
    },
  ];

  const [currentImageIndicies, setCurrentImageIndicies] = useState(
    Array(projectsData.length).fill(0)
  );

  const handleNextImage = (projectIndex: number) => {
    setCurrentImageIndicies((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] =
        (newIndices[projectIndex] + 1) %
        projectsData[projectIndex].images.length;
      return newIndices;
    });
  };

  const handlePrevImage = (projectIndex: number) => {
    setCurrentImageIndicies((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] =
        (newIndices[projectIndex] -
          1 +
          projectsData[projectIndex].images.length) %
        projectsData[projectIndex].images.length;
      return newIndices;
    });
  };

  return (
    <ProjectsContainer>
      <ProjectsTitle>My Experiences</ProjectsTitle>
      {projectsData.map((project, index) => (
        <ProjectsSection key={index}>
          <LeftButton onClick={() => handlePrevImage(index)}>❮</LeftButton>
          <ProjectImageContainer>
            <ProjectImage
              src={project.images[currentImageIndicies[index]]}
            ></ProjectImage>
          </ProjectImageContainer>
          <RightButton onClick={() => handleNextImage(index)}>❯</RightButton>
          <ProjectTexts>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectTexts>
        </ProjectsSection>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
