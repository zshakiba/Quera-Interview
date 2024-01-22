"use client";
import convertToPersianNumbers from "@/app/utils/utils";
import React from "react";
import TickCircle from "./ui/TickCircle";

type ListItemProps = {
  itemText: string;
};

const QuestionDetails: React.FC<ListItemProps> = ({ itemText }) => (
  <li>
    <a
      href="#"
      className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center justify-between text-slate-800 p-3"
    >
      <div className="flex ">
        <TickCircle/>

        <span className="mr-2">{itemText}</span>
      </div>
      <div className="flex flex-row items-center">
        <span className="ml-1">{convertToPersianNumbers("1")}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
        >
          <path
            fill="#4A5568"
            d="M15.667.667H2.333c-.916 0-1.666.75-1.666 1.666v15L4 14h11.667c.916 0 1.666-.75 1.666-1.667v-10c0-.916-.75-1.666-1.666-1.666Zm0 11.666H4L2.333 14V2.333h13.334v10Z"
          />
        </svg>
      </div>
    </a>
  </li>
);

export default QuestionDetails;
