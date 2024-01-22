import CodeSnippet from "../components/ui/CodeSnippet ";

import { IconArrow, IconQGBT, IconUser } from "./ui/Icons";
import { Input } from "./ui/Input";
import SelectInput from "../components/ui/SelectInput";
import QuestionInput from "./QuestionInput";
import QuestionSelect from "./QuestionSelect";

const options = [
  { value: "", label: "مسئله" },
  { value: "option1", label: "گزینه 1" },
  { value: "option2", label: "گزینه 2" },
  { value: "option3", label: "گزینه 3" },
];

const QuestionFromGPT = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <QuestionInput placeholder="عنوان سوال" />
        <QuestionSelect options={options} />
      </div>

      <div className="flex items-center gap-x-4 px-3">
        <IconUser />
        <h4 className="text-base text-slate-900 font-normal text-sm">
          نیلوفر موجودی
        </h4>
        <h4 className=" text-gray-500 font-normal text-sm">
          ۲۳ خرداد ۱۴۰۲ ساعت ۱۶:۴۲
        </h4>
      </div>
      <div className="px-3 text-gray-800 font-normal text-xs mt-3 leading-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </div>

      <div className="bg-gray-50 m-2 p-3 rounded">
        <div className="flex items-center gap-x-4">
          <IconQGBT />
          <h4 className="text-base text-slate-900 font-normal text-sm">
            کیوجی‌پی‌تی
          </h4>
          <h4 className=" text-gray-500 font-normal text-sm">
            ۲۳ خرداد ۱۴۰۲ ساعت ۱۶:۴۳
          </h4>
        </div>
        <div className=" text-gray-800 font-normal text-xs mt-3 leading-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </div>
        <div className="flex flex-row-reverse">
          <div className="">
            <CodeSnippet />
          </div>
        </div>
      </div>
      <div className="flex-1  border border-gray-300 rounded-md m-2">
        <Input
          type="text"
          placeholder="سوال خودتون رو اینجا بنویسید"
          icon={<IconArrow />}
          className="focus:outline-none bg-transparent w-full p-2 text-slate-800"
        />
      </div>
    </>
  );
};

export default QuestionFromGPT;
