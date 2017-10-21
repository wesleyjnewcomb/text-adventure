import React from 'react'
import { gameState } from '../games/dark-room'
import MessageLog from './MessageLog'
import Exits from './Exits'
import InventoryPane from './InventoryPane'
import RoomItems from './RoomItems'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, gameState, { messages: [] })
    this.addMessage = this.addMessage.bind(this)
	  this.changeRoom = this.changeRoom.bind(this)
    this.getItem = this.getItem.bind(this)
  }

  addMessage(newMessage) {
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  changeRoom(roomId) {
	  this.addMessage(this.state[roomId].desc)
    const playerState = Object.assign({}, this.state.player, { currentRoom: roomId })
    this.setState({ player: playerState })
  }

  getItem(item) {
    this.addItemToInventory(item)
    let currentRoom = this.state.player.currentRoom
    this.removeItemFromRoom(item, currentRoom)
  }

  addItemToInventory(item) {
    let inventory = this.state.player.inventory.concat(item)
    const playerState = Object.assign({}, this.state.player, { inventory: inventory })
    this.setState({ player: playerState })
  }

  removeItemFromRoom(removedItem, roomId) {
    let items = this.state[roomId].items
    let newItems = items.filter(item => {
      return item.name !== removedItem.name
    })
    const roomState = Object.assign({}, this.state[roomId], { items: newItems })
    this.setState({ [roomId]: roomState })
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
        <div className='flex-container'>
          <div id='left-section'>
            <div id='top-section'>
              <h1>{currentRoom.name}</h1>
              <MessageLog messages={this.state.messages} />
            </div>
            <div id='bottom-section'>
              <RoomItems items={currentRoom.items} getItem={this.getItem}/>
              <Exits exits={currentRoom.exits} changeRoom={this.changeRoom} />
            </div>
          </div>
          <div id='right-section'>
            <InventoryPane items={this.state.player.inventory} />
          </div>
        </div>
      </div>
    )
  }
}

export default Game
