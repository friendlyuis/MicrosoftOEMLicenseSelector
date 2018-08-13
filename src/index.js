import React from "react";
import ReactDOM from "react-dom";
import Selector from "./selector";
import Appbar from "./appbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Appbar />
        <Selector />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
