import { useAppSelector } from "./reduxHooks"

interface Props{
    searchQuery: string,
    categoryFilter: string,
    statusFilter: string
}

export const useInventoryStore = ({searchQuery, categoryFilter, statusFilter }: Props) => {

    const {inventoryData: initialInventory} = useAppSelector(state => state.inventory)
    console.log({initialInventory})

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
    return {
        filtered,
        totalItems,
        inStockCount,
        lowStockCount,
        outOfStockCount,
    }
}
