
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function message({messages}:{messages:string[]}) {
  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  )
}

export default message

