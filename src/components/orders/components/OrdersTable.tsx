import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenu } from '@/components/ui/dropdown-menu'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'
import type { Order } from '@/types/Order'
import { MoreHorizontal, Eye, Truck, XCircle, ShoppingCart } from 'lucide-react'
import { getStatusConfig } from '../helper/getStatusConfig'

interface Props{
    filtered: Order[],
    setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>
}

export const OrdersTable = ({filtered, setSelectedOrder}: Props) => {
  return (
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Order ID</TableHead>
                <TableHead className="text-muted-foreground">Customer</TableHead>
                <TableHead className="text-muted-foreground">Items</TableHead>
                <TableHead className="text-muted-foreground">Total</TableHead>
                <TableHead className="text-muted-foreground">Payment</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Date</TableHead>
                <TableHead className="text-muted-foreground w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((order) => {
                const statusConfig = getStatusConfig(order.status)
                return (
                  <TableRow key={order.id} className="border-border cursor-pointer" onClick={() => setSelectedOrder(order)}>
                    <TableCell className="font-mono text-sm font-medium text-primary">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{order.customer}</span>
                        <span className="text-xs text-muted-foreground">{order.email}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">{order.items}</TableCell>
                    <TableCell className="text-foreground font-medium">${order.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{order.paymentMethod}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusConfig.classes}>
                        <span className="flex items-center gap-1">
                          {statusConfig.icon}
                          {order.status}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{order.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground size-8" onClick={(e) => e.stopPropagation()}>
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-card border-border">
                          <DropdownMenuItem className="text-foreground" onClick={() => setSelectedOrder(order)}>
                            <Eye className="size-4" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-foreground">
                            <Truck className="size-4" /> Track Shipment
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <XCircle className="size-4" /> Cancel Order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <ShoppingCart className="size-10 mb-2" />
              <p className="text-sm">No orders found</p>
            </div>
          )}
        </CardContent>
      </Card>
  )
}
