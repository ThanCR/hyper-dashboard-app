"use client"

import { useState } from "react"
import {
  Search,
  Plus,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Package,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type InventoryItem = {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  status: "In Stock" | "Low Stock" | "Out of Stock"
  lastUpdated: string
}

const initialInventory: InventoryItem[] = [
  { id: "1", name: "Wireless Bluetooth Headphones", sku: "WBH-201", category: "Electronics", price: 79.99, stock: 245, status: "In Stock", lastUpdated: "2 hours ago" },
  { id: "2", name: "USB-C Charging Hub", sku: "UCH-445", category: "Electronics", price: 45.99, stock: 5, status: "Low Stock", lastUpdated: "1 day ago" },
  { id: "3", name: "Ergonomic Laptop Stand", sku: "ELS-112", category: "Furniture", price: 89.99, stock: 0, status: "Out of Stock", lastUpdated: "3 days ago" },
  { id: "4", name: "HD Webcam Pro", sku: "HWP-890", category: "Electronics", price: 129.99, stock: 7, status: "Low Stock", lastUpdated: "5 hours ago" },
  { id: "5", name: "Mechanical Keyboard RGB", sku: "MKR-334", category: "Electronics", price: 149.99, stock: 89, status: "In Stock", lastUpdated: "12 hours ago" },
  { id: "6", name: "Cotton T-Shirt Classic", sku: "CTC-701", category: "Clothing", price: 24.99, stock: 512, status: "In Stock", lastUpdated: "1 hour ago" },
  { id: "7", name: "Wireless Mouse Slim", sku: "WMS-556", category: "Electronics", price: 34.99, stock: 178, status: "In Stock", lastUpdated: "6 hours ago" },
  { id: "8", name: "Standing Desk Mat", sku: "SDM-223", category: "Furniture", price: 59.99, stock: 3, status: "Low Stock", lastUpdated: "2 days ago" },
  { id: "9", name: "Noise Cancelling Earbuds", sku: "NCE-998", category: "Electronics", price: 199.99, stock: 42, status: "In Stock", lastUpdated: "8 hours ago" },
  { id: "10", name: "Organic Coffee Beans 1kg", sku: "OCB-101", category: "Food", price: 18.99, stock: 0, status: "Out of Stock", lastUpdated: "4 days ago" },
  { id: "11", name: "Monitor Arm Dual", sku: "MAD-667", category: "Furniture", price: 119.99, stock: 24, status: "In Stock", lastUpdated: "1 day ago" },
  { id: "12", name: "Denim Jacket Premium", sku: "DJP-412", category: "Clothing", price: 89.99, stock: 67, status: "In Stock", lastUpdated: "3 hours ago" },
]

export function InventoryView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [addDialogOpen, setAddDialogOpen] = useState(false)

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

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Package className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Items</p>
                <p className="text-xl font-bold text-foreground">{totalItems}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-success/10">
                <Package className="size-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">In Stock</p>
                <p className="text-xl font-bold text-foreground">{inStockCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-warning/10">
                <Package className="size-5 text-warning" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Low Stock</p>
                <p className="text-xl font-bold text-foreground">{lowStockCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                <Package className="size-5 text-destructive" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Out of Stock</p>
                <p className="text-xl font-bold text-foreground">{outOfStockCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Actions */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search items or SKU..."
                  className="bg-secondary border-border pl-9 text-foreground placeholder:text-muted-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[160px] bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Clothing">Clothing</SelectItem>
                  <SelectItem value="Furniture">Furniture</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px] bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="In Stock">In Stock</SelectItem>
                  <SelectItem value="Low Stock">Low Stock</SelectItem>
                  <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setAddDialogOpen(true)}>
              <Plus className="size-4" />
              Add Item
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Product</TableHead>
                <TableHead className="text-muted-foreground">SKU</TableHead>
                <TableHead className="text-muted-foreground">Category</TableHead>
                <TableHead className="text-muted-foreground">Price</TableHead>
                <TableHead className="text-muted-foreground">Stock</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Updated</TableHead>
                <TableHead className="text-muted-foreground w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((item) => (
                <TableRow key={item.id} className="border-border">
                  <TableCell className="font-medium text-foreground">{item.name}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{item.sku}</TableCell>
                  <TableCell className="text-muted-foreground">{item.category}</TableCell>
                  <TableCell className="text-foreground">${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-foreground font-medium">{item.stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        item.status === "In Stock"
                          ? "bg-success/15 text-success border-0"
                          : item.status === "Low Stock"
                          ? "bg-warning/15 text-warning border-0"
                          : "bg-destructive/15 text-destructive border-0"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{item.lastUpdated}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground size-8">
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border-border">
                        <DropdownMenuItem className="text-foreground">
                          <Eye className="size-4" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-foreground">
                          <Edit className="size-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Package className="size-10 mb-2" />
              <p className="text-sm">No items found</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add Item Dialog */}
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
              <Input className="bg-secondary border-border text-foreground" placeholder="Enter product name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">SKU</Label>
                <Input className="bg-secondary border-border text-foreground" placeholder="e.g. WBH-201" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Category</Label>
                <Select>
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
                <Input className="bg-secondary border-border text-foreground" type="number" placeholder="0.00" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Initial Stock</Label>
                <Input className="bg-secondary border-border text-foreground" type="number" placeholder="0" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="border-border text-foreground" onClick={() => setAddDialogOpen(false)}>Cancel</Button>
            <Button className="bg-primary text-primary-foreground" onClick={() => setAddDialogOpen(false)}>Add Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
