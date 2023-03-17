import React from "react";
import "./styles.css";
import { SwipeToDelete } from "./SwipeToDelete";

export default function App() {
  const [state, setState] = React.useState([
    { id: 1, title: "First" },
    { id: 2, title: "Second" },
    { id: 3, title: "Third" }
  ]);

  const onDelete = (id) => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <SwipeToDelete rows={state} onDelete={onDelete} />
  );
}
