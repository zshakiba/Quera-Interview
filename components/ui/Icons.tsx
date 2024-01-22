"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function IconQGBT({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <img
      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
      src="/Ellipse.png"
      alt=""
    />
  );
}
function IconUser({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <img
      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
      src="/image.png"
      alt=""
    />
  );
}
function IconArrow({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
        fill="#718096"
      />
    </svg>
  );
}

export { IconQGBT, IconUser, IconArrow };
