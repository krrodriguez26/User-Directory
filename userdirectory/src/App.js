import React, { components } from 'react';
import wrapper from "./components/wrapper";
import jumbotron from "./components/title";
import employees from "./employees.json";
import main from "./components/main";

class App extends components {
  state = {
    employees
  };

  render() {
    return (
      <wrapper>
        <jumbotron />
        <main />
      </wrapper>
    )
  }
};
export default App;