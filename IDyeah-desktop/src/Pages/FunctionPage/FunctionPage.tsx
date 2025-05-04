import React from 'react'

function FunctionPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_4fr] h-[48em] w-[60em] bg-[rgba(0,0,0,0.65)] backdrop-blur-[50px] border-[4px] border-[rgba(255,255,255,0.20)] p-5 gap-[1.25rem] rounded-[50px]">
      <div className="h-full grid grid-rows-1 grid-cols-[1fr_7fr] gap-8 rounded-[calc(50px_-_1.25rem)]">
        <div className="bg-[rgba(0,0,0,0.5)] rounded-[calc(50px_-_1.25rem)] grid grid-rows-[1fr_1fr]">
          <div></div>
          <div className="bg-[rgba(0,0,0,0.5)] rounded-[calc(50px_-_1.25rem)] text-[rgba(255,255,255,0.7)] text-5xl flex items-center justify-center">
            57
          </div>
        </div>
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
            <div className="input" style={{ gridArea: "1 / 1 / 2 / 4" }}>
              <p className="p-0 m-0">Name</p>
              <input type="text" className="text-[30px] text-white" />
            </div>
            <div className="input" style={{ gridArea: "2 / 1 / 3 / 2" }}>
              <p className="p-0 m-0">Adm. no.</p>
              <input type="text" className="text-[30px] w-full text-white" />
            </div>
            <div className="input" style={{ gridArea: "2 / 2 / 3 / 4" }}>
              <p className="p-0 m-0">Ph. no.</p>
              <input type="text" className="text-[30px] text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="block-style"></div>
    </div>
  );
}

export default FunctionPage