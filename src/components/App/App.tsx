import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Homepage from "../../pages/Homepage/Homepage";
import NotFound from "../../pages/NotFound/NotFound";
import Projects from "../../pages/Projects/Projects";
import Footer from "../Footer/Footer";
import { Body } from "../Global/GlobalComponents";
import Header from "../Header/Header";

function PageRouter() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <ToastContainer />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Body>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </Body>
  );
}

export default App;
