"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Truck,
  CheckCircle2,
  Clock,
  XCircle,
  ShoppingCart,
  DollarSign,
  PackageCheck,
  ArrowUpRight,
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
} from "@/components/ui/dialog"

type Order = {
  id: string
  customer: string
  email: string
  items: number
  total: number
  status: "Completed" | "Processing" | "Shipped" | "Cancelled" | "Pending"
  paymentMethod: string
  date: string
}

const orders: Order[] = [
  { id: "ORD-7291", customer: "Sarah Chen", email: "sarah@email.com", items: 3, total: 1240.00, status: "Completed", paymentMethod: "Credit Card", date: "Mar 5, 2026" },
  { id: "ORD-7290", customer: "Marcus Webb", email: "marcus@email.com", items: 1, total: 890.50, status: "Processing", paymentMethod: "PayPal", date: "Mar 5, 2026" },
  { id: "ORD-7289", customer: "Aisha Patel", email: "aisha@email.com", items: 5, total: 2150.00, status: "Completed", paymentMethod: "Credit Card", date: "Mar 4, 2026" },
  { id: "ORD-7288", customer: "Tom Rogers", email: "tom@email.com", items: 2, total: 445.00, status: "Shipped", paymentMethod: "Debit Card", date: "Mar 4, 2026" },
  { id: "ORD-7287", customer: "Lisa Kim", email: "lisa@email.com", items: 4, total: 3200.00, status: "Completed", paymentMethod: "Wire Transfer", date: "Mar 3, 2026" },
  { id: "ORD-7286", customer: "James Wright", email: "james@email.com", items: 1, total: 149.99, status: "Cancelled", paymentMethod: "Credit Card", date: "Mar 3, 2026" },
  { id: "ORD-7285", customer: "Emma Davis", email: "emma@email.com", items: 6, total: 1870.00, status: "Shipped", paymentMethod: "PayPal", date: "Mar 2, 2026" },
  { id: "ORD-7284", customer: "Noah Martinez", email: "noah@email.com", items: 2, total: 560.00, status: "Processing", paymentMethod: "Credit Card", date: "Mar 2, 2026" },
  { id: "ORD-7283", customer: "Olivia Brown", email: "olivia@email.com", items: 3, total: 920.00, status: "Pending", paymentMethod: "Credit Card", date: "Mar 1, 2026" },
  { id: "ORD-7282", customer: "Liam Wilson", email: "liam@email.com", items: 1, total: 89.99, status: "Completed", paymentMethod: "Debit Card", date: "Mar 1, 2026" },
  { id: "ORD-7281", customer: "Sophia Garcia", email: "sophia@email.com", items: 8, total: 4500.00, status: "Shipped", paymentMethod: "Wire Transfer", date: "Feb 28, 2026" },
  { id: "ORD-7280", customer: "Ethan Taylor", email: "ethan@email.com", items: 2, total: 340.00, status: "Completed", paymentMethod: "Credit Card", date: "Feb 28, 2026" },
]

function getStatusConfig(status: Order["status"]) {
  switch (status) {
    case "Completed":
      return { icon: <CheckCircle2 className="size-3.5" />, classes: "bg-success/15 text-success border-0" }
    case "Processing":
      return { icon: <Clock className="size-3.5" />, classes: "bg-warning/15 text-warning border-0" }
    case "Shipped":
      return { icon: <Truck className="size-3.5" />, classes: "bg-primary/15 text-primary border-0" }
    case "Cancelled":
      return { icon: <XCircle className="size-3.5" />, classes: "bg-destructive/15 text-destructive border-0" }
    case "Pending":
      return { icon: <Clock className="size-3.5" />, classes: "bg-muted text-muted-foreground border-0" }
  }
}

export function OrdersView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const filtered = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0)
  const completedOrders = orders.filter((o) => o.status === "Completed").length
  const pendingOrders = orders.filter((o) => o.status === "Processing" || o.status === "Pending").length

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Revenue</p>
                <p className="text-xl font-bold text-foreground">${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-success/10">
                <PackageCheck className="size-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Completed</p>
                <p className="text-xl font-bold text-foreground">{completedOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-warning/10">
                <Clock className="size-5 text-warning" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-xl font-bold text-foreground">{pendingOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search orders or customers..."
                  className="bg-secondary border-border pl-9 text-foreground placeholder:text-muted-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px] bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Processing">Processing</SelectItem>
                  <SelectItem value="Shipped">Shipped</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
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

      {/* Order Detail Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="bg-card border-border text-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">Order Details</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedOrder?.id}
            </DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="flex flex-col gap-4 py-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Customer</span>
                  <span className="text-sm font-medium text-foreground">{selectedOrder.customer}</span>
                  <span className="text-xs text-muted-foreground">{selectedOrder.email}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Status</span>
                  <Badge variant="secondary" className={getStatusConfig(selectedOrder.status).classes + " w-fit"}>
                    <span className="flex items-center gap-1">
                      {getStatusConfig(selectedOrder.status).icon}
                      {selectedOrder.status}
                    </span>
                  </Badge>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">${selectedOrder.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Payment</span>
                  <span className="text-sm text-foreground">{selectedOrder.paymentMethod}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Items</span>
                  <span className="text-sm text-foreground">{selectedOrder.items} products</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Date</span>
                  <span className="text-sm text-foreground">{selectedOrder.date}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
