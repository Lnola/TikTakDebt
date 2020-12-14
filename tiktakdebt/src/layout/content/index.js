import React from "react";
import Home from "../../screens/user/Home";
import Debt from "../../screens/user/Debt";
import { Route, Switch } from "react-router-dom";
import { StyledContent } from "./index.styled";

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route exact path="/next">
          <Home />
        </Route>
        <Route exact path="/debt">
          <Debt />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;
