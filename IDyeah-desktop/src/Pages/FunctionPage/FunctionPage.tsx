import React from 'react'
import Button from '../../Components/Button/Button';

function FunctionPage() {
  return (
    // This is the base component
    <div className="grid grid-cols-1 grid-rows-[1fr_4fr] h-[50em] w-[60em] bg-[rgba(0,0,0,0.65)] backdrop-blur-[50px] border-[4px] border-[rgba(255,255,255,0.20)] p-5 gap-[1.25rem] rounded-[50px]">
      {/* Top Part of the Container */}
      <div className="h-full grid grid-rows-1 grid-cols-[1fr_6fr] gap-8 rounded-[calc(50px_-_1.25rem)]">
        {/* The Logo and count info */}
        <div className="bg-[rgba(0,0,0,0.5)] rounded-[calc(50px_-_1.25rem)] grid grid-rows-[1fr_1fr]">
          <div></div>
          <div className="bg-[rgba(0,0,0,0.5)] rounded-[calc(50px_-_1.25rem)] text-[rgba(255,255,255,0.7)] text-5xl flex items-center justify-center">
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
          <div className="rounded-full w-full aspect-square input"></div>
          <div className="inputCont">
            <InputComponent label="Name" gridarea="1/1/2/4" textArea={false} />
            <InputComponent
              label="Adm. no."
              gridarea="2/1/3/2"
              textArea={false}
            />
            <InputComponent
              label="Ph. no."
              gridarea="2 / 2 / 3 / 4"
              textArea={false}
            />
          </div>
        </div>
      </div>

      {/* This is the Bottom Part of the container */}
      <div className="grid grid-cols-2 grid-rows-1 block-style">
        <div className="grid grid-rows-[1fr_3fr] gap-[2em] h-full">
          <InputComponent label="Guardian" gridarea="" textArea={false} />
          <InputComponent label="Address" gridarea="" textArea={true} />
        </div>
        <div className="grid grid-rows-4 gap-[2em] h-full grid-cols-4">
          <InputComponent
            label="D.O.B."
            gridarea="1 / 1 / 2 / 4"
            textArea={false}
          />
          <InputComponent
            label="Blood"
            gridarea="1 / 4 / 2 / 6"
            textArea={false}
          />
          <InputComponent
            label="Boarding Point"
            gridarea="2 / 1 / 3 / 6"
            textArea={false}
          />
          <InputComponent
            label="Bus no."
            gridarea="3 / 1 / 4 / 3"
            textArea={false}
          />
          <InputComponent
            label="Club"
            gridarea="3 / 3 / 4 / 6"
            textArea={false}
          />
          <div
            className="grid grid-cols-2 grid-rows-1 gap-8 items-end"
            style={{ gridArea: "4 / 1 / 5 / 6" }}
          >
            <button className="w-32 h-fit p-1 opacity-50 bg-gradient-to-br from-white/20 to-white/0 rounded-[100px] text-white justify-self-center">
              CLEAR
            </button>
            <Button label="SUBMIT" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunctionPage

function InputComponent({label, gridarea, textArea}: {label: string; gridarea: string; textArea: boolean;}){
  return (
    <div className="input" style={{ gridArea: gridarea }}>
      <p className="p-0 m-0">{label}</p>
      {textArea ? (
        <textarea
          name="textarea"
          id="txt"
          className="text-[30px] w-full text-white flex items-start justify-start"
        ></textarea>
      ) : (
        <input
          type="text"
          className="text-[30px] w-full text-white flex items-start justify-start"
        />
      )}
    </div>
  );
}