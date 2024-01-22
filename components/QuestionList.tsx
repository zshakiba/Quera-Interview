"use client";

import React from "react";
import Pagination from "./Pagination";
import QuestionDetails from "./QuestionDetails";
import SelectInput from "./ui/SelectInput";

const listItemsData = [
  { itemText: "سوال تستی" },
  { itemText: "سوال تستی" },
  { itemText: "سوال تستی" },
];

const options = [
  { value: "", label: "فیلتر" },
  { value: "option1", label: "فیلتر 1" },
  { value: "option2", label: "فیلتر 2" },
  { value: "option3", label: "فیلتر 3" },
];

const QuestionList = () => {
  return (
    <div className="md:block col-span-4 lg:col-span-2 xl:col-span-2 row-span-2 ">
      <div className="bg-white max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28 rounded-lg border-solid border-gray-300">
        <div className="mb-7">
          <div className="text-lg text-gray-900 bg-gray-200 p-3">سوالات من</div>
          <div className="">
            <div className="z-10  px-4 py-2 rounded-lg flex justify-between items-center text-gray-900">
              <SelectInput options={options} />
            </div>
            <hr className="my-1" />
            <button className="bg-gray-200 opacity-70 hidd"></button>
            <div className="hidden bg-white w-56 mt-2 rounded-lg overflow-hidden border border-gray-200 absolute left-0">
              <a
                href="#"
                className="block text-gray-900 px-4 text-sm py-2 hover:bg-gray-100"
              >
                Account Settings
              </a>
              <a
                href="#"
                className="block text-gray-900 px-4 text-sm py-2 hover:bg-gray-100"
              >
                Support
              </a>
              <a
                href="#"
                className="block text-gray-900 px-4 text-sm py-2 hover:bg-gray-100"
              >
                License
              </a>
              <a
                href="#"
                className="block text-gray-900 px-4 text-sm py-2 hover:bg-gray-100"
              >
                Sign Out
              </a>
            </div>
          </div>
          <ul>
            {listItemsData.map((item, index) => (
              <QuestionDetails key={index} itemText={item.itemText} />
            ))}
          </ul>
          <Pagination totalPages={6} currentPage={5} />
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
