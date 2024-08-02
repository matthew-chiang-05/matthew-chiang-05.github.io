import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 50px 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

export const ProjectsTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 25px;
  color: #faf9f6;
`;

export const ProjectsSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 25px;
`;

export const ProjectTitle = styled.h3`
  text-align: left;
  padding: 0px 20px;
  font-size: 2.4rem;
`;

export const ProjectDescription = styled.p`
  padding: 0px 20px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 40px;
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: left;
  padding: 10px 10px;
  align-items: center;
  height: 400px;
  width: 45%;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  border: 1px solid black;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;
export const ProjectImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProjectTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: "Lucida Sans Typewriter";
  color: #faf9f6;
  align-items: left;
  justify-content: left;
`;

export const ProjectSkills = styled.p``;

export const navButton = styled.button`
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const LeftButton = styled(navButton)`
  left: 5px;
`;

export const RightButton = styled(navButton)`
  right: 10px;
`;
