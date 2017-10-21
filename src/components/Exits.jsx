import React from 'react'

const Exits = props => {
  const { exits } = props
  const exitElements = Object.keys(exits).map((exit, i) => {
    return (
      <a href='#'>{exit}</a>
    )
  })
  return (
    <div id='exits'>
      <h2>Exits</h2>
      {exitElements}
    </div>
  )
}

export default Exits
