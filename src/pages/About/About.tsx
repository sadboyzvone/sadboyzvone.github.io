import { motion } from "framer-motion";
import React from "react";
import Skills from "../../components/Skills/Skills";
import WorkTimeline from "../../components/WorkTimeline/WorkTimeline";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Skills />
        <WorkTimeline />
      </div>
    </motion.div>
  );
}

export default About;
