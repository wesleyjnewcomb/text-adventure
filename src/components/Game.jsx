import React from 'react'
import { gameState } from '../games/dark-room'
import MessageLog from './MessageLog'
import Exits from './Exits'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, gameState, { messages: [] })
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage(newMessage) {
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  changeRoom(roomId) {
    const playerState = Object.assign({}, this.state.player, { currentRoom: roomId })
    this.setState({ player: playerState })
  }

  render() {
    let currentRoom = this.state[this.state.player.currentRoom]

    return (
      <div id="game">
        <h1>{currentRoom.name}</h1>
        <MessageLog messages={this.state.messages} />
        <Exits exits={{ 'door': 1 }} />
      </div>
    )
  }
}

export default Game
