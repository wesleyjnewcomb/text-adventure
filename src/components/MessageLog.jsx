import React from 'react'

class MessageLog extends React.Component {
  constructor(props) {
    super(props)
	this.state = {
	  currentPosition: 0
	}
  }

  componentDidMount() {
   const intervalId = window.setInterval(() => {
	  if (this.state.currentPosition <= this.props.message.length) {
        this.setState({ currentPosition: this.state.currentPosition + 1 })
	  }
	}, 40)

   this.setState({ intervalId: intervalId })
  }

  componentWillReceiveProps(nextProps) {
    let slicedNextMessage = nextProps.message.slice(0, this.props.message.length)
    let currentMessage = this.props.message
    if ((currentMessage !== nextProps.message) && (currentMessage !== slicedNextMessage)) {
  	  this.setState({ currentPosition: 0 })
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.intervalId)
  }

  render() {
    return (
      <div id="message-log">
        <p>{this.props.message.slice(0, this.state.currentPosition)}</p>
      </div>
    )
  }
}

export default MessageLog

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
