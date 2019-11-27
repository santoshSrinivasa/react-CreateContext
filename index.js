import React, { Component } from 'react';
import { render } from 'react-dom';
import ComponentD from "./ComponentD"
import './style.css';

export const UserContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <UserContext.Provider value="Santosh">
      <ComponentD/>
      </UserContext.Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
