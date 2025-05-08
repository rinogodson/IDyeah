import React, { useEffect } from 'react'
import Button from '../../Components/Button/Button';
import { useForm } from '../../App';

import { motion } from 'framer-motion';

function FunctionPage() {
  const {form, setForm} = useForm();

  useEffect(()=>{
    console.log(form);
    
  }, [form])



// procedural function for the form fields 
const createFormFunction = (fieldName: string) => {
  return (value: string) => {
    setForm((prevForm: any) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };
}; 

  return (
    <motion.div
    initial={{transform: "scaleY(0.5)"}}
    animate={{transform:"scaleY(1)"}}
    transition={{duration: 0.3}}
    className='border-[rgba(255,255,255,0.1)] border-[3px] rounded-[50px] z-40'>
      {/* This is the base component */}
      <div className="container grid grid-cols-1 grid-rows-[1fr_4fr] h-[50em] w-[60em] bg-[rgba(0,0,0,0.65)] backdrop-blur-[50px] p-5 gap-[1.25rem] rounded-[50px]">
        {/* Top Part of the Container */}
        <div className="h-full grid grid-rows-1 grid-cols-[1fr_6fr] gap-8 rounded-[calc(50px_-_1.25rem)]">
          {/* The Logo and count info */}
          <div className="bg-[rgba(0,0,0,0.5)] rounded-[calc(50px_-_1.25rem)] grid grid-rows-[1fr_1fr] border-[1px] border-[rgba(255,255,255,0.1)]">
            <div></div>
            <div className="bg-[rgba(0,0,0,0.5)] rounded-[calc(50px_-_1.25rem)] text-[rgba(255,255,255,0.7)] text-5xl flex items-center justify-center border-[1px] border-[rgba(255,255,255,0.1)]">
              57
            </div>
          </div>

          {/* Form Field */}
          <div
            className="block-style"
            style={{
              borderRadius:
                "150px calc(50px - 1.25rem) calc(50px - 1.25rem) 150px",
              gridTemplateRows: "1fr",
              gridTemplateColumns: "1.5fr 4fr",
            }}
          >
            <div className="border-[rgba(255,255,255,0.1)] rounded-full w-full aspect-square input"></div>
            <div className="inputCont">
              <InputComponent
                label="Name"
                gridarea="1/1/2/4"
                textArea={false}
                value={form.name}
                setValue={createFormFunction("name")}
              />
              <InputComponent
                label="Adm. no."
                gridarea="2/1/3/2"
                textArea={false}
                value={form.adm}
                setValue={createFormFunction("adm")}
              />
              <InputComponent
                label="Ph. no."
                gridarea="2 / 2 / 3 / 4"
                textArea={false}
                value={form.ph}
                setValue={createFormFunction("ph")}
              />
            </div>
          </div>
        </div>

        {/* This is the Bottom Part of the container */}
        <div className="grid grid-cols-[1fr_2px_1fr] grid-rows-1 block-style">
          <div className="grid grid-rows-[1fr_3fr_2em] gap-[2em] h-full">
            <InputComponent
              label="Guardian"
              gridarea="1 / 1 / 2 / 2"
              textArea={false}
              value={form.guardian}
              setValue={(value: string) => {
                setForm({ ...form, guardian: value });
              }}
            />
            <InputComponent
              label="Address"
              gridarea="2 / 1 / 4 / 2"
              textArea={true}
              value={form.address}
              setValue={createFormFunction("address")}
            />
          </div>

          <div className="w-[2px] h-full bg-[rgba(255,255,255,0.1)] rounded-2xl"></div>

          <div className="grid grid-rows-4 gap-[2em] h-full grid-cols-4">
            <InputComponent
              label="D.O.B."
              gridarea="1 / 1 / 2 / 4"
              textArea={false}
              value={form.dob}
              setValue={createFormFunction("dob")}
            />
            <InputComponent
              label="Blood"
              gridarea="1 / 4 / 2 / 6"
              textArea={false}
              value={form.blood}
              setValue={createFormFunction("blood")}
            />
            <InputComponent
              label="Boarding Point"
              gridarea="2 / 1 / 3 / 6"
              textArea={false}
              value={form.bp}
              setValue={createFormFunction("bp")}
            />
            <InputComponent
              label="Bus no."
              gridarea="3 / 1 / 4 / 3"
              textArea={false}
              value={form.bus}
              setValue={createFormFunction("bus")}
            />
            <InputComponent
              label="Club"
              gridarea="3 / 3 / 4 / 6"
              textArea={false}
              value={form.club}
              setValue={createFormFunction("club")}
            />
            <div
              className="grid grid-cols-2 grid-rows-1 gap-8 items-end"
              style={{ gridArea: "4 / 1 / 5 / 6" }}
            >
              <button className="duration-300 w-32 h-fit p-1 opacity-50 hover:opacity-100 active:opacity-70 bg-gradient-to-br from-white/20 to-white/0 rounded-[100px] text-white justify-self-center">
                CLEAR
              </button>
              <Button label="SUBMIT" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FunctionPage

function InputComponent({label, gridarea, textArea, value, setValue}: {label: string; gridarea: string; textArea: boolean; value: any; setValue: Function;}){
  const [focused, setFocused] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  
  return (
    <motion.div className={`input`}
    style={{ gridArea: gridarea, borderColor: focused ? "white" : "#ffffff40", scale: focused ? 1.05 : 1, boxShadow: focused ? "0px 0px 100px rgba(245, 222, 179, 0.27)" : 'none' }}>
      <p className="p-0 m-0 flex justify-between items-center pr-1 pl-0.25">{label}<div className='h-1 aspect-square rounded-2xl' style={{background: isTyping ? 'wheat' : 'none', transition: "all 50ms ease"}}></div></p>
      {textArea ? (
        <textarea
          name="textarea"
          id="txt"
          value={value}
          onFocus={()=>setFocused(!focused)}
          onBlur={()=>setFocused(!focused)}
          onChange={(e)=>{
            setIsTyping(true);
            setValue(e.target.value);
            setTimeout(() => {
              setIsTyping(false);
            }, 600); 
          }}
          className="text-[30px] w-full text-white flex items-start justify-start"
        ></textarea>
      ) : (
        <input
          type="text"
          value={value}
          onFocus={()=>setFocused(!focused)}
          onBlur={()=>setFocused(!focused)}
          onChange={(e)=>{
            setIsTyping(true);
            setValue(e.target.value);
            setTimeout(() => {
              setIsTyping(false);
            }, 50);
          }}
          className="input-inside-input text-[30px] w-full text-white flex items-start justify-center px-1"
        />
      )}
    </motion.div>
  );
}
