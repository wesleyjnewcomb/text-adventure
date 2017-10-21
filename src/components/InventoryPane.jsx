import React from 'react'

const InventoryPane = props => {
  const { items, dropItem } = props
  let itemElements = items.map((item) => {
    let handleClick = () => {
      dropItem(item)
    }
    return (
      <li key={item.name}>
        {item.name}
        <a onClick={handleClick}>drop</a>
      </li>
    )
  })
  return (
    <div id='inventory'>
      <h2>Inventory</h2>
      <ul>{itemElements}</ul>
    </div>
  )
}

export default InventoryPane
