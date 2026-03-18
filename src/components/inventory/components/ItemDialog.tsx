import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Dialog } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"
import { useInventoryStore } from "@/hooks/useInventoryStore"
import { useEffect, useState } from "react"
import type { DialogAction } from "../hooks/useItemDialog"
import type { DialogData } from "@/types/DialogData"


interface Props {
  addDialogOpen: boolean,
  setAddDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  dialogAction: DialogAction,
  activeItemData: DialogData,
  onSubmitData: (action: DialogAction, itemData?: DialogData) => void,
}

export const ItemDialog = ({ addDialogOpen, setAddDialogOpen, dialogAction, activeItemData, onSubmitData }: Props) => {

  const [{ productName, productSKU, category, price, stock }, setFormProduct] = useState(activeItemData)

  // const { addNewInventoryItem } = useInventoryStore()

  const handleFormValues = (field: 'productName' | 'productSKU' | 'category' | 'price' | 'initialStock', newValue: string | number) => {
    setFormProduct(prev => ({
      ...prev,
      [field]: newValue
    }))
  }

  const handleSubmit = () => {
    setAddDialogOpen(false)
    if (dialogAction === 'View') return
    onSubmitData(dialogAction, {
      productName,
      productSKU,
      category,
      price,
      stock
    })
  }

  useEffect(() => {
    setFormProduct(activeItemData)
  }, [activeItemData])

  return (
    <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
      <DialogContent className="bg-card border-border text-foreground">
        <DialogHeader>
          <DialogTitle className="text-foreground">{dialogAction} Item</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {dialogAction} a product {dialogAction === 'Add' ? 'to' : 'from'} your inventory.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label className="text-foreground">Product Name</Label>
            <Input
              className="bg-secondary border-border text-foreground"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => { handleFormValues('productName', e.target.value) }}
              disabled={dialogAction === 'View'}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">SKU</Label>
              <Input
                className="bg-secondary border-border text-foreground"
                placeholder="e.g. WBH-201"
                value={productSKU}
                onChange={(e) => { handleFormValues('productSKU', e.target.value) }}
                disabled={dialogAction === 'View'}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Category</Label>
              <Select
                value={category}
                onValueChange={(value) => { handleFormValues('category', value) }}
                disabled={dialogAction === 'View'}
              >
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Clothing">Clothing</SelectItem>
                  <SelectItem value="Furniture">Furniture</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Price</Label>
              <Input
                className="bg-secondary border-border text-foreground"
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => { handleFormValues('price', Number.parseInt(e.target.value || '0')) }}
                disabled={dialogAction === 'View'}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Initial Stock</Label>
              <Input
                className="bg-secondary border-border text-foreground"
                type="number"
                placeholder="0"
                value={stock}
                onChange={(e) => { handleFormValues('initialStock', Number.parseInt(e.target.value || '0')) }}
                disabled={dialogAction === 'View'}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="border-border text-foreground" onClick={() => setAddDialogOpen(false)}>{dialogAction === 'View' ? 'Close' : 'Cancel'}</Button>
          {
            dialogAction !== 'View' &&
            (<Button className="bg-primary text-primary-foreground" onClick={handleSubmit}>{dialogAction} Item</Button>)
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
