import CodeSnippet from "../components/ui/CodeSnippet ";

import { IconArrow, IconQGBT, IconUser } from "./ui/Icons";
import { Input } from "./ui/Input";
import SelectInput from "../components/ui/SelectInput";

const options = [
  { value: "", label: "مسئله" },
  { value: "option1", label: "گزینه 1" },
  { value: "option2", label: "گزینه 2" },
  { value: "option3", label: "گزینه 3" },
];

const QuestionFromCoach = () => {
  return (
      <div className="flex justify-between items-center">
        <div className="w-1/2  m-2 border border-gray-300 rounded-md mt-2">
          <Input
            type="text"
            placeholder="عنوان سوال"
            icon={<IconArrow />}
            className="focus:outline-none bg-transparent w-full p-2 text-slate-800"
          />
        </div>

        <div className="w-1/2  m-2 border border-gray-300 rounded-md mt-2">
          <div className="bg-white p-1 rounded-md flex items-center">
            <SelectInput options={options} />
          </div>
        </div>
      </div>
  );
};

export default QuestionFromCoach;
