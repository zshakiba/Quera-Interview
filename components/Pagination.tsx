"use client";

import React from "react";
import convertToPersianNumbers from "@/app/utils/utils";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  return (
    <div className="flex items-center justify-between bg-customColor p-2 ">
      <div className="mx-auto flex justify-center items-center">
        <nav
          className="isolate inline-flex rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <a
                key={pageNumber}
                href="#"
                aria-current={pageNumber === currentPage ? "page" : undefined}
                className={`relative ${
                  pageNumber === currentPage
                    ? "z-10 inline-flex items-center bg-gray-400 p-2 text-xm text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                    : "inline-flex items-center px-2 py-3 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                }`}
              >
                {convertToPersianNumbers(String(pageNumber))}
              </a>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
