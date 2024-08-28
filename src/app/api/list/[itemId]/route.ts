import { deleteItem } from "@/db/list"

export const DELETE = async (_req: Request, { params }: { params: { itemId: string } }) => {
    try {
        await deleteItem(params.itemId)
        return Response.json({ status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 404 })
    }
}   