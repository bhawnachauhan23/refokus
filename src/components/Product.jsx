import React,{ useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Product({ val, mover ,count}) {
  // const [bgColor, setBgColor] = useState('#000');
  return (
    <motion.div 
      //  style={{ backgroundColor: bgColor }}
      // onMouseEnter={() => setBgColor('blue')} 
      // onMouseLeave={() => setBgColor('#000')} animate={{ backgroundColor: bgColor }}
      // transition={{ ease: [0.76, 0, 0.24, 1],duration: 0.4 }}
      className="w-full py-20 pr-40 h-[23rem] pl-10">
      <motion.div transition={{ease:[0.76,0,0.24,1], duration:0.6}} onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between ">
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
