import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import detail from "./pages/Detail/detail";
import home from "./pages/Home/home";

import { Global, Container } from "./styles";

const App = () => {
  return (
    <React.Fragment>
      <Global />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route exact path="/image/:imageDetail" component={detail}></Route>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
};

export default App;
