import React from "react";
import { render } from "react-dom";
import SpyroText from "./SpyroText";
import "./style.css";

const App = () => {
  const [text, setText] = React.useState("");

  return (
    <div>
      <SpyroText text={text} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        placeholder="type text you want here"
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
