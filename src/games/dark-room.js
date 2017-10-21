export const gameState = {
  player: {
    inventory: [],
    score: 0,
    currentRoom: "room1"
  },
  room1:  {
    name: "A Dark Room",
    desc: "You can't see anything, but you can feel a door knob",
    exits: { "door": 1 }
  },
  room2:  {
    name: "A Slightly Less Dark Room",
    desc: "You can see the door that you came through. It's a nice door. There's also a ladder",
    exits: { "door": 0, "ladder": 2 }
  },
  room3:  {
    name: "Pretty Dark Room",
    desc: "It's dark, but you can see clearly if you squint your eyes",
    exits: { "fall down hole": 1 }
  }
}
