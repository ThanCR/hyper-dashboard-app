import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueTab } from "./components/RevenueTab"
import { OrdersTab } from "./components/OrdersTab"
import { CustomersTab } from "./components/CustomersTab"
import { ProductsTab } from "./components/ProductsTab"

export const ReportsView = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="bg-secondary border border-border">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="mt-6">
          <RevenueTab />
        </TabsContent>
        <TabsContent value="orders" className="mt-6">
          <OrdersTab />
        </TabsContent>
        <TabsContent value="products" className="mt-6">
          <ProductsTab />
        </TabsContent>
        <TabsContent value="customers" className="mt-6">
          <CustomersTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
