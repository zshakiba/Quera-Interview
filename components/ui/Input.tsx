import * as React from "react";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, placeholder, ...props }, ref) => {
    return (
      <div className="bg-white p-1 rounded-md flex items-center">
        <input
          type={type}
          placeholder={placeholder}
          className="focus:outline-none bg-transparent w-full p-2 text-slate-800"
          ref={ref}
          {...props}
        />
        {icon && (
          <a href="#" className="bg-gray-200 p-2 rounded-md">
            {React.cloneElement(icon, { className: "text-gray-500" })}
          </a>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
