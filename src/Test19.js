import Test20 from "./Test20";
import { useState } from "react";

export default function Test19() {
  const [counter, setCounter] = useState(0);
  const handler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="App">
      <Test20 handler={handler} counter={counter} />
    </div>
  );
}
