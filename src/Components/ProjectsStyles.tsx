import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 50px 50px;
  display: flex;
  background: #a07979;
  justify-content: center;
  align-items: center;
  flex-direction: Column;
`;

export const ProjectsTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 25px;
`;

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f0efef;
  border-radius: 20%;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  text-align: center;
  padding: 20px 20px;
`;

export const ProjectDescription = styled.p`
  padding: 0px 20px;
  text-align: center;
`;

export const ProjectImage = styled.img`
  align: center;
  width: 80%;
  margin-top: 20px;
  border-radius: 5%;
`;
