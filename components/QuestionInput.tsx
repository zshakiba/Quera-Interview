import { Input } from "./ui/Input";
import { IconArrow } from "./ui/Icons";

interface QuestionInputProps {
 placeholder: string;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ placeholder }) => (
 <div className="w-1/2 m-2 border border-gray-300 rounded-md mt-2">
    <Input
      type="text"
      placeholder={placeholder}
      icon={<IconArrow />}
      className="focus:outline-none bg-transparent w-full p-2 text-slate-800"
    />
 </div>
);

export default QuestionInput;
