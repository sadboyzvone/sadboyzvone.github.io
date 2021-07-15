import { motion } from "framer-motion";
import React from "react";
import { Container } from "../../components/Header/HeaderComponents";
import NotFoundContent from "../../components/NotFoundContent/NotFoundContent";

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <NotFoundContent />
      </Container>
    </motion.div>
  );
}

export default NotFound;
