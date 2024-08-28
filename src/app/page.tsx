'use client'

import { FormItem } from "@/db/list";
import { Item } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {

  const [groceryList, setGroceryList] = useState<Item[]>([])
  const [updateGroceryListFlag, setUpdateGroceryList] = useState<boolean>(false)
  const [itemDescription, setItemDescription] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/list');
      setGroceryList(await data.json())
    }
    fetchData()
  }, [updateGroceryListFlag])

  const addItem = async () => {
    const itemToAdd = { description: itemDescription }

    await fetch('/api/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(itemToAdd)
    })
    setUpdateGroceryList(!updateGroceryListFlag)
  }

  const removeItem = async (itemId: string) => {
    await fetch(`/api/list/${itemId}`, {
      method: 'DELETE'
    })
    setUpdateGroceryList(!updateGroceryListFlag)
  }

  return (
    <>
      <div>
        <form onSubmit={(e) => { e.preventDefault(); addItem() }}>
          <input type='text' name='descripition' value={itemDescription} onChange={e => setItemDescription(e.target.value)} />
          <button type='submit'>Add</button>
        </form>
      </div>
      {groceryList.length > 0 ?
        <ul>
          {groceryList.map((item) => (
            <div key={item.id}>
              <li>{item.id}: {item.description}</li>
              <button onClick={async () => await removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </ul> :
        <p>There are no items in the list yet!</p>
      }
    </>
  );
}
