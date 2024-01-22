import SelectInput from "../components/ui/SelectInput";

interface QuestionSelectProps {
 options: { value: string; label: string }[];
}

const QuestionSelect: React.FC<QuestionSelectProps> = ({ options }) => (
 <div className="w-1/2 m-2 border border-gray-300 rounded-md mt-2">
    <div className="bg-white p-1 rounded-md flex items-center">
      <SelectInput options={options} />
    </div>
 </div>
);

export default QuestionSelect;
