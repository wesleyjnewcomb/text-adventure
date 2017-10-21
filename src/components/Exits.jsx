import React from 'react'

const Exits = props => {
  const { exits, changeRoom } = props
  const exitElements = Object.keys(exits).map((exit, i) => {
    let move = () => {
	  changeRoom(exits[exit])
	}
    return (
      <li key={i}><a onClick={move}>{exit}</a></li>
    )
  })
  return (
    <div id='exits'>
      <h3>Exits</h3>
      <ul>{exitElements}</ul>
    </div>
  )
}

export default Exits
