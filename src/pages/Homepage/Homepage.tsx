import { motion } from "framer-motion";
import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";

function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CallToAction />
    </motion.div>
  );
}

export default Homepage;
