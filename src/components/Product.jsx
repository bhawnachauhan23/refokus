import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Product({
  val,
  mover,
  count,
  handleMouseEnter,
  handleMouseLeave,
  bgColor,
}) {
  return (
    <motion.div className="w-full py-20 pr-30 h-[23rem] ">
      <motion.div
        style={{ backgroundColor: bgColor }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
        onMouseEnter={() => (handleMouseEnter(count), mover(count))}
        onMouseLeave={() => handleMouseLeave(count)}
        className="w-full mx-auto pr-40 pl-10 flex items-center justify-between py-10 ">
        <h1 className="text-5xl capitalize font-medium ">{val.title}</h1>
        <div className="dets w-1/4 ">
          <p className="mb-7 text-[1.3vw]">{val.description}</p>
          <div className="flex items-center gap-4 ">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Product;
