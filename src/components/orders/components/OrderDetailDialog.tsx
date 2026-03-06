import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Order } from '@/types/Order'
import { getStatusConfig } from '../helper/getStatusConfig'

interface Props{
  selectedOrder: Order | null
  setSelectedOrder:  React.Dispatch<React.SetStateAction<Order | null>>,
}

export const OrderDetailDialog = ({selectedOrder, setSelectedOrder}: Props) => {
  return (

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
  )
}
