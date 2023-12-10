import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  title: {
    color: "#55c500",
    fontSize: "5rem",
    marginBlock: 0,
  },
  button: {
    backgroundColor: "#ddd",
  },
  active: {
    backgroundColor: "#212121",
    color: "white",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 {...stylex.props(styles.title)}>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          {...stylex.props(count > 0 ? styles.active : styles.button)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
