import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import NotFound from "../../pages/NotFound/NotFound";
import Footer from "../Footer/Footer";
import { Body } from "../Global/GlobalComponents";
import Header from "../Header/Header";

function App() {
  return (
    <Body>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Body>
  );
}

export default App;
