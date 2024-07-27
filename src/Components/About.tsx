import React from "react";
import { AboutSection, AboutPhoto, AboutText } from "./AboutStyles";

const About = () => {
  return (
    <AboutSection>
      <AboutPhoto src="/Photos/fin-2.jpg"></AboutPhoto>
      <AboutText>
        An ethusiastic and driven developer with a passion for building
        real-world user applications.
      </AboutText>
    </AboutSection>
  );
};

export default About;
