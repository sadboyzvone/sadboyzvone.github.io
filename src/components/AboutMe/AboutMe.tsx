import React from "react";
import { AboutText, AboutLabel, Container } from "./AboutMeComponents";

function AboutMe() {
  return (
    <Container>
      <AboutLabel>About me</AboutLabel>
      <AboutText>
        A young but, very ambitious developer, always looking for a new problem
        to tackle head on. With years of experience under the belt, I can assure
        you that my skills and expertise will provide you with a great product.
      </AboutText>
    </Container>
  );
}

export default AboutMe;
