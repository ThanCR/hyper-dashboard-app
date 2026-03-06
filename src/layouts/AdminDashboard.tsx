"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { AdminHeader } from "@/containers/AdminHeader"
import { AdminSidebar } from "@/containers/AdminSidebar"
import { DashboardView } from "@/components/dashboard/DashboardView"
import { InventoryView } from "@/components/inventory/InventoryView"
import { OrdersView } from "@/components/orders/OrdersView"
import { ReportsView } from "@/components/reports/ReportsView"
import { Settings } from "@/components/settings/Settings"

const pageConfig: Record<string, { title: string; description: string }> = {
  dashboard: { title: "Dashboard", description: "Overview of your business metrics" },
  inventory: { title: "Inventory", description: "Manage your product inventory" },
  orders: { title: "Orders", description: "Track and manage sell orders" },
  reports: { title: "Reports", description: "Detailed business analytics" },
  settings: { title: "Settings", description: "Configure your admin preferences" },
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("orders")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentPage = pageConfig[activeTab] || pageConfig.dashboard

  function handleTabChange(tab: string) {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 z-50 w-64">
            <div className="relative h-full">
              <AdminSidebar
                activeTab={activeTab}
                onTabChange={handleTabChange}
                collapsed={false}
                onToggleCollapse={() => setMobileMenuOpen(false)}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 rounded-lg p-1 text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <AdminSidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader
          title={currentPage.title}
          description={currentPage.description}
          onMobileMenuToggle={() => setMobileMenuOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "inventory" && <InventoryView />}
          {activeTab === "orders" && <OrdersView />}
          {activeTab === "reports" && <ReportsView />}
          {activeTab === "settings" && <Settings />}
        </main>
      </div>
    </div>
  )
}
