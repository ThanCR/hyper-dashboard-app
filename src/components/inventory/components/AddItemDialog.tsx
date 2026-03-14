import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Dialog } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"
import { useInventoryStore } from "@/hooks/useInventoryStore"
import { useState } from "react"


interface Props{
    addDialogOpen: boolean,
    setAddDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddItemDialog = ({addDialogOpen, setAddDialogOpen}: Props) => {

  const [{productName, productSKU, category, price, initialStock}, setNewProduct] = useState({
    productName: '',
    productSKU: '',
    category: '',
    price: 0,
    initialStock: 0,
  })

  const { addNewInventoryItem } = useInventoryStore()

  const handleFormValues = (field: 'productName' | 'productSKU' | 'category' | 'price' | 'initialStock', newValue: string | number) => {
    setNewProduct( prev => ({
      ...prev,
      [field]: newValue
    }) )
  }

  const handleAddInventoryItem = () => {
     setAddDialogOpen(false)
    addNewInventoryItem({
      id: crypto.randomUUID(),
      name: productName,
      sku: productSKU,
      category:category,
      price: price,
      stock: initialStock,
      threshold: 5,
      status: "In Stock",
      lastUpdated: 'seconds'
    })
  }
    
  return (
    <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="bg-card border-border text-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">Add New Item</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Add a new product to your inventory.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Product Name</Label>
              <Input 
                className="bg-secondary border-border text-foreground" 
                placeholder="Enter product name"  
                value={productName} 
                onChange={(e) => {handleFormValues('productName', e.target.value)}}/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">SKU</Label>
                <Input 
                  className="bg-secondary border-border text-foreground" 
                  placeholder="e.g. WBH-201"
                  value={productSKU}
                  onChange={(e) => {handleFormValues('productSKU', e.target.value)}} />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Category</Label>
                <Select value={category} onValueChange={(value) => {handleFormValues('category', value)}}>
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
                  />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Initial Stock</Label>
                <Input 
                  className="bg-secondary border-border text-foreground" 
                  type="number" 
                  placeholder="0" 
                  value={initialStock}
                  onChange={(e) => { handleFormValues('initialStock', Number.parseInt(e.target.value || '0')) }}
                  />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="border-border text-foreground" onClick={() => setAddDialogOpen(false)}>Cancel</Button>
            <Button className="bg-primary text-primary-foreground" onClick={handleAddInventoryItem}>Add Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}
