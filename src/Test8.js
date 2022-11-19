// Mounting phase example as a child component
import React from "react";

export default class Test8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rutul"
    };
    console.log("In Test8 constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In Test8 derive state from props");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("In Test8 component did mount");
  }
  render() {
    console.log("In Test8 render");

    return (
      <>
        <h1>Hello2</h1>
      </>
    );
  }
}
