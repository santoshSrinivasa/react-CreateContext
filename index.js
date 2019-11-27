import React, { Component } from "react";
import { render } from "react-dom";
import ComponentD from "./ComponentD";
import "./style.css";

export const UserContext = React.createContext();
export const TitleContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <UserContext.Provider value="Santosh">
        <TitleContext.Provider value="welcome back">
          <ComponentD />
        </TitleContext.Provider>
      </UserContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
