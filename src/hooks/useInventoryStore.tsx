import { useDispatch } from "react-redux"
import { useAppSelector } from "./reduxHooks"
import { onDeleteInventoryItem } from "@/store"

interface Props{
    searchQuery?: string,
    categoryFilter?: string,
    statusFilter?: string
}

export const useInventoryStore = ({searchQuery = '', categoryFilter = '', statusFilter = '' }: Props) => {

    const dispatch = useDispatch()

    const {inventoryData: initialInventory} = useAppSelector(state => state.inventory)

    const filtered = initialInventory.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.sku.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
        const matchesStatus = statusFilter === "all" || item.status === statusFilter
        return matchesSearch && matchesCategory && matchesStatus
    })
    const totalItems = initialInventory.length
    const inStockCount = initialInventory.filter((i) => i.status === "In Stock").length
    const lowStockCount = initialInventory.filter((i) => i.status === "Low Stock").length
    const outOfStockCount = initialInventory.filter((i) => i.status === "Out of Stock").length

    const deleteInventoryItem = (item: any) => {
        dispatch(onDeleteInventoryItem({item}))
    }

    return {
        filtered,
        totalItems,
        inStockCount,
        lowStockCount,
        outOfStockCount,

        deleteInventoryItem
    }
}
