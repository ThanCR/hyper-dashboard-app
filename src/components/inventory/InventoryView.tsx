import { useState } from "react"
import { useInventoryStore } from "@/hooks/useInventoryStore"
import { InventoryTable } from "./components/InventoryTable"
import { FilterBar } from "./components/FilterBar"
import { InventorySummary } from "./components/InventorySummary"
import { ItemDialog } from "./components/ItemDialog"
import { useItemDialog } from "./hooks/useItemDialog"

export function InventoryView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const {
    addDialogOpen,
    setAddDialogOpen,
    dialogAction,
    setDialogAction,
    activeItemData,
    setActiveItemData,
    onOpenItemDialog,
    onSubmitData,
  } = useItemDialog()

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
        setDialogAction={setDialogAction}
        onOpenItemDialog={onOpenItemDialog}
      />
      <InventoryTable
        filtered={filtered}
        deleteInventoryItem={deleteInventoryItem}
        setItemData={setActiveItemData}
        onOpenItemDialog={onOpenItemDialog}
      />
      <ItemDialog
        dialogAction={dialogAction}
        addDialogOpen={addDialogOpen}
        setAddDialogOpen={setAddDialogOpen}
        activeItemData={activeItemData}
        onSubmitData={onSubmitData}
      />
    </div>
  )
}
