import { useDispatch } from "react-redux"
import { useAppSelector } from "./reduxHooks"
import { onAddNewInventoryItem, onDeleteInventoryItem } from "@/store"
import { saveInventoryData } from "@/data/localStorage"
import { useEffect } from "react"
import type { InventoryItem } from "@/types/InventoryItem"

interface Props{
    searchQuery?: string,
    categoryFilter?: string,
    statusFilter?: string
}

export const useInventoryStore = ({searchQuery = '', categoryFilter = '', statusFilter = '' }: Props = {}) => {
    const dispatch = useDispatch()
    const {inventoryData} = useAppSelector(state => state.inventory)
    const filtered = inventoryData.filter((item) => {
        const matchesSearch =
            item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.productSKU.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
        const matchesStatus = statusFilter === "all" || item.status === statusFilter
        return matchesSearch && matchesCategory && matchesStatus
    })
    const deleteInventoryItem = (inventoryItemToBeDeleted: InventoryItem) => {
        dispatch(onDeleteInventoryItem({inventoryItemToBeDeleted}))
    }
    const addNewInventoryItem = (newInventoryItem: InventoryItem) => {
        dispatch(onAddNewInventoryItem(newInventoryItem))
    }
    useEffect(() => {
        saveInventoryData(inventoryData)
    }, [inventoryData])

    return {
        filtered,
        totalItems: inventoryData.length,
        inStockCount: inventoryData.filter((i) => i.status === "In Stock").length,
        lowStockCount: inventoryData.filter((i) => i.status === "Low Stock").length,
        outOfStockCount: inventoryData.filter((i) => i.status === "Out of Stock").length,

        addNewInventoryItem,
        deleteInventoryItem
    }
}
