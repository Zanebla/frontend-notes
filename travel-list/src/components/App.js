import { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    // setItems((items) => items.push(item)) x
    // In React, we are not allowed to mutate state. React is all about immutability.
    setItems((items) => [...items, item]) // Work with arrays in an immutable way
    // 沃日，item和items没搞清楚害我debug半天
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    )
    if (confirmed) setItems([])
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandleToggleItem={handleToggleItem}
        onHandleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}
