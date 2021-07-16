import { motion } from "framer-motion";
import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import { PageContainer } from "../../components/AboutMe/AboutMeComponents";
import Skills from "../../components/Skills/Skills";
import WorkTimeline from "../../components/WorkTimeline/WorkTimeline";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageContainer>
        <AboutMe />
        <Skills />
        <WorkTimeline />
      </PageContainer>
    </motion.div>
  );
}

export default About;
