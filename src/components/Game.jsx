import React from 'react'
import { gameState } from '../games/dark-room'
import MessageLog from './MessageLog'
import Exits from './Exits'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, gameState, { messages: [] })
    this.addMessage = this.addMessage.bind(this)
	this.changeRoom = this.changeRoom.bind(this)
  }

  addMessage(newMessage) {
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  changeRoom(roomId) {
	this.addMessage(this.state[roomId].desc)
    const playerState = Object.assign({}, this.state.player, { currentRoom: roomId })
    this.setState({ player: playerState })
  }

  gameInit() {
    let currentRoom = this.state[this.state.player.currentRoom]
	this.addMessage(currentRoom.desc)
  }

  componentDidMount() {
    this.gameInit()
  }
 
  render() {
    let currentRoom = this.state[this.state.player.currentRoom]

    return (
      <div id="game">
        <h1>{currentRoom.name}</h1>
        <MessageLog messages={this.state.messages} />
        <Exits exits={currentRoom.exits} changeRoom={this.changeRoom} />
      </div>
    )
  }
}

export default Game
