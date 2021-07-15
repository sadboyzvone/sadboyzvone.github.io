import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import NotFound from "../../pages/NotFound/NotFound";
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
          <Route path="/" exact component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
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
