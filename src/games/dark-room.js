export const gameState = {
  player: {
    inventory: [],
    score: 0,
    currentRoom: "room1"
  },
  room1: {
    name: "A Dark Room",
    desc: "You can't see anything, but you can feel a door knob to your north",
    exits: { "north": "room2" },
    items: [{ name: 'dongrel', use: 'impressDragonKing' }]
  },
  room2: {
    name: "A Slightly Less Dark Room",
    desc: `You can see the door that you came through. It's a nice door.
      There's also a ladder with some dried blood on the floor by it.`,
    exits: { "south": "room1", "ladder": "room3" },
    items: []
  },
  room3: {
    name: "Pretty Dark Room",
    desc: `It's pretty dark, but if you squint your eyes, you can see a little
      silhouetto of a man. And by "little silhouetto of a man", I mean the large
      imposing figure of the Dragon King.`,
    exits: { "fall down hole": "room2" },
    items: [{ name: 'torch', use: 'lightUpRoom' }]
  },
  treasureRoom: {
    name: "Dragon King's Treasure Room",
    desc: `You have done well to defeat the Dragon King. Enormous piles of gold
      lay before you. You'll be able to retire early and annoy your family as
      you try to reconnect with them in your middle age.`
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
        use: 'killDragonKing'
      })
    }
    return newGameState
  },

  impressDragonKing: function(gameState) {
    let newGameState = Object.assign({}, gameState)
    if (gameState.player.currentRoom === 'room3') {
      newGameState.room3.desc += ' The Dragon King is impressed with your dongrel!'
    }
    return newGameState
  },

  killDragonKing: function(gameState) {
    let newGameState = Object.assign({}, gameState)
    if (gameState.player.currentRoom === 'room3') {
      let desc = `Your sword goes snicker-snack as you cut into
      the doughy underbelly of the Dragon King.`
      const itemNames = gameState.player.inventory.map(item => item.name)
      if (itemNames.includes('dongrel')) {
        desc += ` With his dying breath, he says, "That was a really nice dongrel!"`
      } else {
        desc += ` With his dying breath, he curses you and your entire family. Welp...`
      }
      desc += ` A door to his treasure room appears on the wall behind his corpse.`
      newGameState.room3.desc = desc
      newGameState.room3.exits['east'] = 'treasureRoom'
    }
    return newGameState
  }
}
