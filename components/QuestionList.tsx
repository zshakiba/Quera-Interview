"use client";

import React from "react";
import Pagination from "./Pagination";
import QuestionDetails from "./QuestionDetails";
import SelectInput from "./ui/SelectInput";

const listItemsData = [
  { itemText: "سوال تستی", tags: ["اصلاح کد", "اهداف فصل"] },
  { itemText: "سوال تستی", tags: ["اصلاح کد", ",حلقه چیست"] },
  { itemText: "سوال تستی", tags: ["اصلاح کد", ",حلقه چیست"] },
];

const options = [
  { value: "", label: "فیلتر" },
  { value: "option1", label: "فیلتر 1" },
  { value: "option2", label: "فیلتر 2" },
  { value: "option3", label: "فیلتر 3" },
];

const QuestionList = () => {
  return (
    <div className="md:block col-span-5 lg:col-span-2 xl:col-span-2 row-span-2 ">
      <div className="bg-white max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28 rounded-lg border-solid border-gray-300">
        <div className="mb-7">
          <div className="text-lg text-gray-900 bg-gray-200 p-3">سوالات من</div>

          <div className="z-10  px-4 py-2 rounded-lg flex justify-between items-center text-gray-900">
            <SelectInput options={options} />
          </div>
          <hr className="my-1" />
          <ul className="">
            {listItemsData.map((item, index) => (
              <QuestionDetails
                key={index}
                itemText={item.itemText}
                tags={item.tags}
              />
            ))}
          </ul>
          <Pagination totalPages={6} currentPage={5} />
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
