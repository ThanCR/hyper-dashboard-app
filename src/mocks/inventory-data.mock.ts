import type { InventoryItem } from "@/types/InventoryItem";

export const initialInventoryMockData: InventoryItem[] =
  [
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
