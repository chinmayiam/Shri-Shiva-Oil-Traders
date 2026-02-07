import { AdminLayout } from "./dashboard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

// Mock Orders
const orders = [
  { id: "ORD-001", customer: "Rajesh Kumar", date: "2023-10-25", total: "₹2,640", status: "Delivered", items: "Groundnut Oil (15kg)" },
  { id: "ORD-002", customer: "Sneha Patil", date: "2023-10-26", total: "₹500", status: "Processing", items: "Coconut Oil (1kg)" },
  { id: "ORD-003", customer: "Amit Sharma", date: "2023-10-27", total: "₹3,675", status: "Pending", items: "Kusubi Oil (15kg)" },
  { id: "ORD-004", customer: "Priya Deshpande", date: "2023-10-27", total: "₹900", status: "New", items: "Sunflower Oil (5kg)" },
];

export default function AdminOrders() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-secondary">Orders & Inquiries</h2>
        <p className="text-muted-foreground">Manage customer orders and messages.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="max-w-[200px] truncate" title={order.items}>{order.items}</TableCell>
                <TableCell className="font-bold text-secondary">{order.total}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={
                      order.status === "Delivered" ? "bg-green-100 text-green-700 border-green-200" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-700 border-blue-200" :
                      order.status === "Pending" ? "bg-yellow-100 text-yellow-700 border-yellow-200" :
                      "bg-gray-100 text-gray-700 border-gray-200"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Eye size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
}
