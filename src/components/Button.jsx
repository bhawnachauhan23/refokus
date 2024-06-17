import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-fit px-6 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-4 flex-shrink-0 ">
      <span className="text-sm font-regular">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
