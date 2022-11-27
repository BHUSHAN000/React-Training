import React ,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Test44 from './Test44';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Test44 /> 
);


// Prop-drilling     replacement milel in future //context API
// setting state in class component     => this.setState({property: newValue})
// conditional rendering of classes or Text => CSS
// conditional rendering => JSX
// styling and css basics
// Event handling
// Methods as props
// list rendering
// lists and keys
// index as key

// Phases of class component/ function component
// there are 3 phases => 1) mounting 2) updating 3) unmounting

// 1) mounting phase has 4 lifecycle methods
//  a) constructor()
//  b) render()
//  c) getDerivedStateFromProps()
//  d) componentDidMount()

// Component phase 
// Component mounting lifecycle =4
// Component updating lifecycle =2
// Component unmounting lifecycle=1