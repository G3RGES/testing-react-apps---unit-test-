import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  function changeText() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>it's good to see you</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeText}>Change text</button>
    </div>
  );
};

export default Greeting;
