import { BetweenHorizonalEnd, ImageUp, Scroll } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';
export default function ButtonList() {
  return (
    <motion.div
    initial={{
      transform: "translateX(-200px) rotateY(-90deg)",
    }}
    animate={{ transform: "translateX(0) rotateY(0deg)" }}
    transition={{ duration: 0.6, delay: 0.9 }}
    className="border-[rgba(255,255,255,0.1)] border-[3px] rounded-[42px]">
      <div className="flex flex-col bg-[rgba(0,0,0,0.65)] backdrop-blur-[50px] p-5 gap-[1.25rem] rounded-[40px] overflow-hidden w-full h-fit justify-center items-center">
        <ButtonListChild label="Insert Image" icon={<ImageUp />} />
        <ButtonListChild label="Fill from DB" icon={<BetweenHorizonalEnd />} />
        <ButtonListChild label="Show List" icon={<Scroll />} />
      </div>
    </motion.div>
  );
}


function ButtonListChild({label, icon}:{label:string, icon:React.ReactElement}){
    return <>
    <button className="bt-ls-ch">{icon}{label}</button>
    </>
}