import type { Order } from "@/types/Order"
import { CheckCircle2, Clock, Truck, XCircle } from "lucide-react"

export const getStatusConfig = (status: Order["status"]) => {
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