import {  Focus, RotateCcw } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';

function CameraPreview() {
  const [focused, setFocused] = React.useState(false)
  const [scale, setScale] = React.useState(1)
  const [captured, setCaptured] = React.useState(false)
  return (
    <motion.div
      initial={{
        transform: "translateX(-200px) rotateY(-90deg)",
      }}
      animate={{ transform: "translateX(0) rotateY(0deg)" }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border-[rgba(255,255,255,0.1)] border-[3px] rounded-[80px] rounded-t-[8em]"
    >
      <div className="grid h-fit w-[15em] bg-[rgba(0,0,0,0.65)] backdrop-blur-[50px] p-5 gap-[1.25rem] rounded-[80px] rounded-t-[8em] overflow-hidden">
        <div
          className="rounded-full w-full aspect-square input"
          style={{
            scale: focused ? 1.1 : 1,
            border: focused
              ? "6px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(255,255,255,0.1)",
          }}
        ></div>
        <p className="text-[rgba(255,255,255,0.2)] text-[0.8em] w-full flex justify-center items-center">
          Feed from mobile cam.
        </p>
        <div
          onMouseEnter={() => setFocused(true)}
          onMouseDown={() => {
            setScale(0.8);
            setFocused(false);
          }}
          onMouseUp={() => {
            setFocused(true);
            setCaptured(!captured);
            setScale(1);
          }}
          onMouseLeave={() => setFocused(false)}
          className="bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.5)] active:bg-[rgba(0,0,0,0.3)] select-none cursor-pointer w-[100%_+_1.25rem] h-25 mt-0.5 m-[-1.25rem] border-t-[1px] border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.4)] flex justify-center items-center flex-col"
        >
          <div
            className="flex justify-center items-center flex-col"
            style={{
              scale: scale,
              opacity: scale * 100,
              transition: "all 100ms ease",
            }}
          >
            {captured ? <RotateCcw size={45} /> : <Focus size={45} />}
            <p>{captured ? "Retake" : "Capture"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CameraPreview