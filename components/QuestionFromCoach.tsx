
import { IconArrow } from "./ui/Icons";
import { Input } from "./ui/Input";
import QuestionInput from "./QuestionInput";
import QuestionSelect from "./QuestionSelect";

const options = [
  { value: "", label: "مسئله" },
  { value: "option1", label: "گزینه 1" },
  { value: "option2", label: "گزینه 2" },
  { value: "option3", label: "گزینه 3" },
];

const QuestionFromCoach = () => {
  return (
    <div >
    <div className="flex justify-between items-center">
      <QuestionInput placeholder="عنوان سوال" />
      <QuestionSelect options={options} />
    </div>

    

    <div className="flex-1  border border-gray-300 rounded-md m-2">
      <Input
        type="text"
        placeholder="سوال خودتون رو اینجا بنویسید"
        icon={<IconArrow />}
        className="focus:outline-none bg-transparent w-full p-2 text-slate-800"
      />
    </div>
    </div>
  );
};

export default QuestionFromCoach;
