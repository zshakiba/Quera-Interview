import React from "react";
import { render } from "react-dom";
import CodeSnippet from "./Code";

const App: React.FC = () => {
  return (
    <div>
      <h1>Your Next.js Page</h1>
      <CodeSnippet />
    </div>
  );
};

// Use the render function to render your main App component
render(<App />, document.getElementById("root"));
