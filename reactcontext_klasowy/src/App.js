import React, { Component } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { defaultObject } from "./AppContext";
import UserInfo from "./UserInfo";
import Button from "./Button";

class App extends Component {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  };

  handleToggleStateIsLogged = () => {
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
  };
  handleToggleStateIsAdult = () => {
    this.setState((prevState) => ({
      isUserAdult: !prevState.isUserAdult,
    }));
  };

  render() {
    return (
      <>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserAdult,
            toggleLoggedState: this.handleToggleStateIsAdult,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </>
    );
  }
}

export default App;
