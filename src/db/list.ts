// import { MyPrismaClient as prisma} from "./_client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export interface Item {
    id: string;
    description: string;
}

export interface FormItem {
    description: string;
}

export interface GroceryList {
    list: Item[];
}

export async function addItem(item: FormItem): Promise<void> {
    await prisma.item.create({ data: item })
}

export async function getAllItems(): Promise<Item[]> {
    const groceryList = await prisma.item.findMany();
    return groceryList
}

export async function deleteItem(id: string): Promise<void> {
    await prisma.item.delete({
        where: { id }
    })
}