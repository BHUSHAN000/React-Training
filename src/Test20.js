import React from "react";
import axios from 'axios';

class Test20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterInner: 0
    };
    console.log('In constructor of Test20');
  }
  
  componentDidMount(){
    console.log('In Component Did mount of Test20',this.state);
    
  }
  static getDerivedStateFromProps(props, state) {
    console.log("In getderivedStatefromprops of Test20", props, state);
    if (props.counter !== state.counterInner) {
      return { counterInner: 10 };
    } else {
      return null;
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("In shouldComponentUpdate of Test20", nextProps, nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("In getsnapshot before update of Test20", prevProps, prevState);
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data.data));
    return 11;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("In component did update of Test20", snapshot);
  }
  render() {
    console.log("In Render of Test20");

    return (
      <>
        {this.props.counter}
        <button onClick={this.props.handler}>Increment</button>
      </>
    );
  }
}

export default Test20;
