import React, { Component } from "react";
import { AppContext } from "./AppContext";

class Button extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ toggleLoggedState, isUserLogged }) => (
          <button onClick={toggleLoggedState}>
            {isUserLogged ? "wyloguj" : "zaloguj"}
          </button>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Button;
