import { motion } from "framer-motion";
import React from "react";

function Homepage() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div></div>
    </motion.div>
  );
}

export default Homepage;
