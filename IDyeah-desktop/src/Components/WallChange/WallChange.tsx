import React from 'react'
import {Wallpaper} from 'lucide-react'
export default function WallChange() {
  const [style, setStyle] = React.useState({scale: 1, transition: "all 300ms ease"})
  return (
    <>
      <button
      onMouseEnter={()=>setStyle({...style, scale: 1.1})}
      onMouseLeave={()=>setStyle({...style, scale: 1})}
      onMouseDown={()=>setStyle({...style, scale: 0.9})}
      onMouseUp={()=>setStyle({...style, scale: 1.1})}
      style={style}
      className='w-[3em] aspect-square absolute bottom-4 right-4 bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.7)] flex justify-center items-center rounded-[50%]'>
        <Wallpaper />
      </button>
    </>
  );
}
