import { useState } from "react"
import { AddItemDialog } from "./components/AddItemDialog"
import { useInventoryStore } from "@/hooks/useInventoryStore"
import { InventoryTable } from "./components/InventoryTable"
import { FilterBar } from "./components/FilterBar"
import { InventorySummary } from "./components/InventorySummary"

export function InventoryView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [addDialogOpen, setAddDialogOpen] = useState(false)

  const { filtered, totalItems, inStockCount, lowStockCount, outOfStockCount, deleteInventoryItem } = useInventoryStore({ searchQuery, categoryFilter, statusFilter })

  return (
    <div className="flex flex-col gap-6">
      <InventorySummary 
        totalItems={totalItems}
        inStockCount={inStockCount}
        lowStockCount={lowStockCount}
        outOfStockCount={outOfStockCount}
        />
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        setAddDialogOpen={setAddDialogOpen}
      />
      <InventoryTable filtered={filtered} deleteInventoryItem={deleteInventoryItem}/>
      <AddItemDialog
        addDialogOpen={addDialogOpen}
        setAddDialogOpen={setAddDialogOpen}
      />
    </div>
  )
}
