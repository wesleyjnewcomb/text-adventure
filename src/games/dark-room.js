export const gameState = {
  player: {
    inventory: [],
    score: 0,
    currentRoom: "room1"
  },
  room1:  {
    name: "A Dark Room",
    desc: "You can't see anything, but you can feel a door knob",
    exits: { "door": "room2" },
    items: [{ name: 'dongrel', use: 'impressDragonKing' }]
  },
  room2:  {
    name: "A Slightly Less Dark Room",
    desc: `You can see the door that you came through. It's a nice door.
      There's also a ladder with some dried blood on the floor by it.`,
    exits: { "door": "room1", "ladder": "room3" },
    items: []
  },
  room3:  {
    name: "Pretty Dark Room",
    desc: `It's pretty dark, but if you squint your eyes, you can see a little
      silhouetto of a man. And by "little silhouetto of a man", I mean the large
      imposing figure of the Dragon King.`,
    exits: { "fall down hole": "room2" },
    items: [{ name: 'torch', use: 'lightUpRoom' }]
  }
}

export const gameActions = {
  lightUpRoom: function(gameState) {
    let newGameState = Object.assign({}, gameState)
    if (gameState.player.currentRoom === 'room1') {
      newGameState.room1.name = 'This Room Is Lit'
      newGameState.room1.desc = `The room has been illuminated by a torch.
      HOW CONVENIENT! You see a sword duct taped to the ceiling.`
      newGameState.room1.items.push({
        name: 'sword of dragon-slaying',
        use: null
      })
    }
    return newGameState
  },

  impressDragonKing: function(gameState) {
    let newGameState = Object.assign({}, gameState)
    if (gameState.player.currentRoom === 'room3') {
      newGameState.room3.desc += 'The Dragon King is impressed with your dongrel!'
    }
    return newGameState
  }
}
