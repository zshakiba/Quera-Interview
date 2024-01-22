import React from "react";

const CodeSnippet: React.FC = () => {
  var code = `
  #include <stdio.h>   
      int main()
      {
      // this is a comment!
      return 0;
      }`;
  
  return (
    <div className="direction-ltr text-left">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
  };
  
  export default CodeSnippet;