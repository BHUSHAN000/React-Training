import React from "react";
import Test1 from "./Test1";
import "./styles.css";

export default class Test9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rutul"
    };
  }

  handlerClick = () => {
    // this.setState({ name: "Bhushan" });
    ReactDOM.unmountComponentAtNode(document.getElementById())
  };

  render() {
    console.log("In Test9 render");

    return (
      <>
        <Test1 name={this.state.name} handlerClick={this.handlerClick} />
      </>
    );
  }
}
