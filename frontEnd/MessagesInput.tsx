/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

function messageInput({send}:{send:(value:string)=>void}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value,setValue]=useState(" ")
  return (
    <div>
      <input onChange={(e)=>setValue(e.target.value)} placeholder='type your message..'value={value}></input>
      <button onClick={()=>send(value)}>send</button>
    </div>
  )
}

export default messageInput
