import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenu } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { InventoryItem } from '@/types/InventoryItem'
import { MoreHorizontal, Eye, Edit, Trash2, Package } from 'lucide-react'

interface Props {
    filtered: InventoryItem[],
    deleteInventoryItem: (item: InventoryItem) => void
}

export const InventoryTable = ({ filtered, deleteInventoryItem }: Props) => {
    return (
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
                                            <DropdownMenuItem className="text-destructive" onClick={() => {deleteInventoryItem(item)}}>
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
    )
}
