import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"
import { Plus, Search } from "lucide-react"

interface Props{
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    categoryFilter: string,
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>,
    statusFilter: string,
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>,
    setAddDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const FilterBar = ({searchQuery, setSearchQuery, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter, setAddDialogOpen}: Props) => {
    return (
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
                            <SelectTrigger className="w-40 bg-secondary border-border text-foreground">
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
                            <SelectTrigger className="w-40 bg-secondary border-border text-foreground">
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
    )
}
