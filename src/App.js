import React from "react";
import Header from "./components/header/Header";
import "./app.scss";
import Main from "./components/main/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./components/content/details/Details";
import "./app.scss";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/movies" component={Main} />
          <Route exact path="/:id/:name/details" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
