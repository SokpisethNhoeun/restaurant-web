import React from "react"
function Button({handleClickhander,value,title}) {
  return (
    <div>
<button onClick={handleClickhander} className="btns" value={value}>{title}</button>
    </div>
  )
}

export default Button
