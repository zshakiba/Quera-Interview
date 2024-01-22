import React from "react";

const CodeSnippet: React.FC = () => {
  var code = `
  #include &lt;stdio.h&gt;   
  int main()
  {
  // this is a comment!
  return 0;
  }`;
  
  
  return (
    <div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
  };
  
  export default CodeSnippet;