import React ,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
// import { store } from "./REDUX/store/store";
// import Test48 from './Test48';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
                {/* <Provider store={store}> */}

                <App /> 
                {/* </Provider> */}
        </>
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

//  1) mounting phase has 4 lifecycle methods~
//  a) constructor()
//  b) render()
//  c) getDerivedStateFromProps()
//  d) componentDidMount()

// Component phase 
// Component mounting lifecycle =4
// Component updating lifecycle =2
// Component unmounting lifecycle=1


// controlled component
// uncontrolled component
// Pure component
// React.memo

// hooks
// 1) useState
// 2) useEffect
// 3) useRef
// 4) 

// deboucing and throtlling
// callback ref
// forwarding ref
// HOC
// custom hook
// Context API 


// React Portal = 15 min
// Error boundary = 30 min
// axios        = 45 min

// 4) useContext   // 10 min
// 5) useReducer   // 30 min
// 6) useCallback  // 20 min
// 7) useMemo      // 20 min
// 8) useSelector // redux
// 9) useDispatch // redux


// Redux   // 3 days


// Javascript

// local storage => 20 min
// session storage => 20 min
// cookies => 10 min

