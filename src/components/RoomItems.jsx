import React from 'react'

const RoomItems = props => {
  const { items, getItem } = props
  let itemElements = items.map(item => {
    let handleClick = () => {
      getItem(item)
    }
    return (
      <li key={item.name}><a onClick={handleClick}>{item.name}</a></li>
    )
  })

  return (
    <div id='room-items'>
      <h3>Items in the Room</h3>
      <ul>
        {itemElements}
      </ul>
    </div>
  )
}

export default RoomItems
