import React from 'react'

const MessageLog = props => {
  // const { messages } = props
  // const messageElements = messages.map((message, i) => {
  //   return (
  //     <p key="i">{message}</p>
  //   )
  // })
  // return (
  //   <div id="message-log">
  //     {messageElements}
  //   </div>
  // )
  return (
    <div id="message-log">
      <p>{props.message}</p>
    </div>
  )
}

export default MessageLog
