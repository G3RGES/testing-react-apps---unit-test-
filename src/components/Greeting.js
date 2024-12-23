import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  function changeText() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {/* {!changedText && <p>it's good to see you</p>} */}
      {!changedText && <Output>it's good to see you</Output>}
      {/* {changedText && <p>Changed</p>} */}
      {changedText && <Output>Changed</Output>}
      <button onClick={changeText}>Change text</button>
    </div>
  );
};

export default Greeting;
