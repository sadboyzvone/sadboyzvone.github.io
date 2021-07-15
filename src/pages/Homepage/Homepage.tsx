import { motion } from "framer-motion";
import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";

function Homepage() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <CallToAction />
    </motion.div>
  );
}

export default Homepage;
