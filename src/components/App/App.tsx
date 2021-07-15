import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
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
        </Switch>
      </BrowserRouter>
    </Body>
  );
}

export default App;
