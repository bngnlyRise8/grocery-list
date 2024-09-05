import {addItem, deleteItem, getAllItems} from '@/db/list'

export const GET = async function () {
  try {
    const items = await getAllItems()
    return Response.json(items, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 404 })
  }
}

export const POST = async function (req: Request) {

  const body = await req.json()

  try {
    await addItem(body)
    return Response.json({ status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

export const DELETE = async function () {
  try {
    const items = await getAllItems()

    for (const item of items) {
      await deleteItem(item.id)
    }
    return Response.json(items, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 404 })
  }
}
