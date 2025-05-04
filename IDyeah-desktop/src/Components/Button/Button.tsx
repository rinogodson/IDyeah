import React from 'react'

function Button({label}:{label:string;}) {
  return (
    <>
  <button className="button">{label}</button>
    </>
  )
}

export default Button