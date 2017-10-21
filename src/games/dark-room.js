export const gameState = {
  player: {
    inventory: [],
    score: 0,
    currentRoom: 0
  },
  rooms: [
    {
      id: 0,
      name: "A Dark Room",
      desc: "You can't see anything, but you can feel a door knob",
      exits: { "door": 1 }
    },
    {
      id: 1,
      name: "A Slightly Less Dark Room",
      desc: "You can see the door that you came through. It's a nice door. There's also a ladder",
      exits: { "door": 0, "ladder": 2 }
    },
    {
      id: 2,
      name: "Pretty Dark Room",
      desc: "It's dark, but you can see clearly if you squint your eyes",
      exits: { "fall down hole": 1 }
    }
  ]
}
