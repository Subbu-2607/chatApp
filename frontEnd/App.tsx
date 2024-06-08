import { useEffect, useState } from 'react'
import './App.css'
import { io, Socket } from 'socket.io-client'
import Messages from './Messages'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MessagesInput from './MessagesInput'


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socket, setSocket] = useState<Socket>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = useState<string[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const send=(value:string)=>{
    socket?.emit('message',value)

  }
  useEffect(() => {
    const newSocket = io('http://localhost:3001')
    setSocket(newSocket)
   
  },[setSocket])
  const messageListner=(message:string)=>{
    setMessages([...messages,message])
    
  }
  useEffect(() => {
    socket?.on('message',messageListner)
    return ()=>{
      socket?.off('message',messageListner)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[messageListner])


  return (
    <>
      {" "}
      <MessagesInput send={send} />
      <Messages messages={messages}/>
    </>
  )
}

export default App
