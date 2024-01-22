"use client";
import Tabs from "./FullWidthTabs";
import QuestionFromCoach from "./QuestionFromCoach";
import QuestionFromGPT from "./QuestionFromGPT";

const options = [
  { value: "", label: "مسئله" },
  { value: "option1", label: "گزینه 1" },
  { value: "option2", label: "گزینه 2" },
  { value: "option3", label: "گزینه 3" },
];
const tabs = [
  {
    label: "سوال از ربات QGPT",
    content: (
      <div>
        {" "}
        <QuestionFromGPT options={options} />
      </div>
    ),
  },
  {
    label: "سوال از مربی‌های دوره",
    content: (
      <div>
        <QuestionFromCoach />
      </div>
    ),
  },
];

const Form = () => {
  return (
    <div className="md:block col-span-6 lg:col-span-7 xl:col-span-7 row-span-7 ">
      <div className="bg-white max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28 rounded-md border-solid border-gray-500 ">
        <div className="mb-1">
          <div className="text-lg text-gray-900 bg-gray-200 p-3">
            درخواست پشتیبانی
          </div>
          <div className="text-xs  p-3 leading-5">
            بررسی کدی که نوشتید و رفع خطا توسط خودتون یکی از مفیدترین کارها برای
            پیشرفت مهارت برنامه‌نویسیه! اگر به اندازه کافی تلاش کردید و وقت خوبی
            برای رفع خطا گذاشتید و به نتیجه نرسیدید، ما اینجاییم که در فرایند
            دیباگ کردن بهتون کمک کنیم.
          </div>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Form;
