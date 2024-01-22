import React from "react";

const CodeSnippet: React.FC = () => {
  var title = `
#include <stdio.h>   
int main()
{
    // this is a comment!
    return 0;
}
`;

  return (
    <pre className="p-3 text-sm text-left">{title.replace(/^\s+/gm, "")}</pre>
  );
};

export default CodeSnippet;
