import React from 'react'

const InventoryPane = props => {
  const { items } = props
  let itemElements = items.map((item) => {
    return (
      <li key={item.name}>{item.name}</li>
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
