import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({val,hover}) {
    
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && '#7443ff',paddingLeft:"25px",paddingRight:"25px"}} className={`${val.width}  bg-zinc-800 p-5 rounded-xl min-h-[26rem] flex flex-col justify-between `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{val.heading1}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-6 w-72 ">{val.heading2}</h1>
      </div>
      <div className="downpart w-full">
        {val.start && (
          <>
            <h1 className="text-8xl font-medium">Start a Project</h1>
            <button className="rounded-full py-2 px-6 mt-5 border-[1.8px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {val.para && (
          <p className="text-sm text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
