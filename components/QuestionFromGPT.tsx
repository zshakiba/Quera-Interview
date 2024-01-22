import React, { ReactNode } from "react";
import CodeSnippet from "./ui/CodeSnippet ";
import { IconArrow, IconQGBT, IconUser } from "./ui/Icons";
import { Input } from "./ui/Input";
import SelectInput from "../components/ui/SelectInput";
import QuestionInput from "./QuestionInput";
import QuestionSelect from "./QuestionSelect";

interface UserInfoProps {
  name: string;
  date: string;
  className: string;
  icon: ReactNode;
}

interface QuestionFromGPTProps {
  options: { value: string; label: string }[];
}

const UserInfo: React.FC<UserInfoProps> = ({ name, date, className, icon }) => (
  <div className={`flex items-center gap-x-4 ${className}`}>
    {icon}
    <h4 className="text-base text-slate-900 font-normal text-sm">{name}</h4>
    <h4 className="text-gray-500 font-normal text-sm">{date}</h4>
  </div>
);

const ContentSection: React.FC<{ content: string }> = ({ content }) => (
  <div className="px-3 text-gray-800 font-normal text-xs mt-3 leading-5">
    {content}
  </div>
);

const QuestionFromGPT: React.FC<QuestionFromGPTProps> = ({ options }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <QuestionInput placeholder="عنوان سوال" />
        <QuestionSelect options={options} />
      </div>

      <UserInfo
        name="نیلوفر موجودی"
        date="۲۳ خرداد ۱۴۰۲ ساعت ۱۶:۴۲"
        className="px-3"
        icon={<IconUser />}
      />
      <ContentSection
        content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد."
      />

      <div className="bg-gray-50 m-2 p-3 rounded">
        <UserInfo
          name="کیوجی پی تی"
          date="۲۳ خرداد ۱۴۰۲ ساعت ۱۶:۴۲"
          className="px-3"
          icon={<IconQGBT />}
        />
        <ContentSection
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است."
        />
        <div className="flex flex-row-reverse">
          <CodeSnippet />
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
