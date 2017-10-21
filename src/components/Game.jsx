import React from 'react'
import { gameState } from '../games/dark-room'
import MessageLog from './MessageLog'
import Exits from './Exits'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = gameState
    this.state.messages = ["A dragon appeareth!!!", "You ~quiver~"]
  }
  render() {
    return (
      <div id="game">
        <MessageLog messages={this.state.messages} />
        <Exits exits={{ 'door': 1 }} />
      </div>
    )
  }
}

export default Game
