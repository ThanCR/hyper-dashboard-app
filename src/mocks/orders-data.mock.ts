import type { Order } from "@/types/Order";

export const orders: Order[] = [
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