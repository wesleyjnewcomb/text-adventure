import React from 'react'

const InventoryPane = props => {
  const { items, useItem, dropItem } = props
  let itemElements = items.map((item) => {
    let useLink
    if (item.use) {
      let handleUseClick = () => {
        useItem(item)
      }
      useLink = (<a onClick={handleUseClick}>use</a>)
    }
    let handleDropClick = () => {
      dropItem(item)
    }
    return (
      <li key={item.name}>
        {item.name}
        {useLink}
        <a onClick={handleDropClick}>drop</a>
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
