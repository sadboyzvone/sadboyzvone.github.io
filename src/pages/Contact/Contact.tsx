import { motion } from "framer-motion";
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactForm />
    </motion.div>
  );
}

export default Contact;
