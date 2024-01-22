// components/CustomSelect.tsx

import React, { SelectHTMLAttributes } from 'react';

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<CustomSelectProps> = ({ options, ...props }) => {
  return (
     <select
       className="focus:outline-none bg-transparent w-full p-2 text-slate-800 rounded"
       defaultValue={options[0].value}
       {...props}
     >
       {options.map((option) => (
         <option key={option.value} value={option.value}>
           {option.label}
         </option>
       ))}
     </select>
  );
 };
 

export default SelectInput;
