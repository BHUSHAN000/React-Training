/**
 * * Program for handling callback refs in function component
 */
const Test46 = () => {
    let inputRef = null;
  
    // let inputRef= React.createRef();
    const onClick = () => {
      console.log("INPUT VALUE: ", inputRef.value);   // this.inputRef.value
    };
  
    const onFocusClick = () => {
      console.log("Focus input");
      inputRef.focus();
    };
    console.log("Rendering");
    return (
      <div>
        <input
          ref={(node) => {
            inputRef = node;
          }}
        />
        <button onClick={onClick}>Log value</button>
        <button onClick={onFocusClick}>Focus on input</button>
      </div>
    );
  };
  
  export default Test46;
  