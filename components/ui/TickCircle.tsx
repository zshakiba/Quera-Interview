import React from "react";

const TickCircle: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default TickCircle;
