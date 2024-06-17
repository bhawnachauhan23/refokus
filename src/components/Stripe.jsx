import { motion } from 'framer-motion'
import React from 'react'

function  Stripe({val}) {

  return (
    <motion.div  initial={{ x: "0" }}
    animate={{ x: "-100%" }}
    transition={{ ease: "linear", duration: 5, repeat: Infinity }} className='w-[23%] px-9 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center flex-shrink-0'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </motion.div>
  )
}

export default  Stripe