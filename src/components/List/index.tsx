"use client";

import React from "react";
import { Flame, Clock, Eye } from "lucide-react";

const List = () => {
  return (
    <ul className="flex items-center text-gray-500 bg-[#323546] rounded-md p-0.5">
      <li
        className="cursor-pointer bg-[#222531] text-white rounded-md p-1.5 px-2.5 hover:text-white"
        onClick={(e) => {
          const items = e.currentTarget.parentElement?.children;
          if (items) {
            Array.from(items).forEach((item) => {
              item.classList.remove("bg-[#222531]", "text-white");
            });
          }
          e.currentTarget.classList.add("bg-[#222531]", "text-white");
        }}
      >
        <Flame className="w-[15px] h-[15px]" />
      </li>
      <li
        className="cursor-pointer p-1.5 rounded-md px-2 hover:text-white"
        onClick={(e) => {
          const items = e.currentTarget.parentElement?.children;
          if (items) {
            Array.from(items).forEach((item) => {
              item.classList.remove("bg-[#222531]", "text-white");
            });
          }
          e.currentTarget.classList.add("bg-[#222531]", "text-white");
        }}
      >
        <Clock className="w-[15px] h-[15px]" />
      </li>
      <li
        className="cursor-pointer p-1.5 rounded-md px-2 hover:text-white"
        onClick={(e) => {
          const items = e.currentTarget.parentElement?.children;
          if (items) {
            Array.from(items).forEach((item) => {
              item.classList.remove("bg-[#222531]", "text-white");
            });
          }
          e.currentTarget.classList.add("bg-[#222531]", "text-white");
        }}
      >
        <Eye className="w-[15px] h-[15px]" />
      </li>
    </ul>
  );
};

export default List;
