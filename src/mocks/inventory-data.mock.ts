import type { InventoryItem } from "@/types/InventoryItem";

export const initialInventoryMockData: InventoryItem[] =
  [
    { id: "1", productName: "Wireless Bluetooth Headphones", productSKU: "WBH-201", category: "Electronics", price: 79.99, stock: 245, status: "In Stock", lastUpdated: "2 hours ago", threshold: 10 },
    { id: "2", productName: "USB-C Charging Hub", productSKU: "UCH-445", category: "Electronics", price: 45.99, stock: 5, status: "Low Stock", lastUpdated: "1 day ago" , threshold: 10 },
    { id: "3", productName: "Ergonomic Laptop Stand", productSKU: "ELS-112", category: "Furniture", price: 89.99, stock: 0, status: "Out of Stock", lastUpdated: "3 days ago" , threshold: 10 },
    { id: "4", productName: "HD Webcam Pro", productSKU: "HWP-890", category: "Electronics", price: 129.99, stock: 7, status: "Low Stock", lastUpdated: "5 hours ago" , threshold: 10 },
    { id: "5", productName: "Mechanical Keyboard RGB", productSKU: "MKR-334", category: "Electronics", price: 149.99, stock: 89, status: "In Stock", lastUpdated: "12 hours ago" , threshold: 10 },
    { id: "6", productName: "Cotton T-Shirt Classic", productSKU: "CTC-701", category: "Clothing", price: 24.99, stock: 512, status: "In Stock", lastUpdated: "1 hour ago" , threshold: 10 },
    { id: "7", productName: "Wireless Mouse Slim", productSKU: "WMS-556", category: "Electronics", price: 34.99, stock: 178, status: "In Stock", lastUpdated: "6 hours ago" , threshold: 10 },
    { id: "8", productName: "Standing Desk Mat", productSKU: "SDM-223", category: "Furniture", price: 59.99, stock: 3, status: "Low Stock", lastUpdated: "2 days ago" , threshold: 10 },
    { id: "9", productName: "Noise Cancelling Earbuds", productSKU: "NCE-998", category: "Electronics", price: 199.99, stock: 42, status: "In Stock", lastUpdated: "8 hours ago" , threshold: 10 },
    { id: "10", productName: "Organic Coffee Beans 1kg", productSKU: "OCB-101", category: "Food", price: 18.99, stock: 0, status: "Out of Stock", lastUpdated: "4 days ago" , threshold: 10 },
    { id: "11", productName: "Monitor Arm Dual", productSKU: "MAD-667", category: "Furniture", price: 119.99, stock: 24, status: "In Stock", lastUpdated: "1 day ago" , threshold: 10 },
    { id: "12", productName: "Denim Jacket Premium", productSKU: "DJP-412", category: "Clothing", price: 89.99, stock: 67, status: "In Stock", lastUpdated: "3 hours ago" , threshold: 10 },
  ]
