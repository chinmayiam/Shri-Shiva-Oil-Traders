import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, LogOut, LayoutDashboard } from "lucide-react";
import { useEffect } from "react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setLocation("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-muted/20 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-white hidden md:flex flex-col fixed h-full">
        <div className="p-6 border-b border-white/10">
          <h1 className="font-serif text-2xl font-bold text-primary">Shri Shiva Oil Traders Admin</h1>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Link href="/admin/dashboard">
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/90 hover:text-white">
              <LayoutDashboard size={20} /> Dashboard
            </a>
          </Link>
          <Link href="/admin/products">
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/90 hover:text-white">
              <Package size={20} /> Products
            </a>
          </Link>
          <Link href="/admin/orders">
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/90 hover:text-white">
              <ShoppingCart size={20} /> Orders
            </a>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10 gap-3" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Header (TODO if needed) */}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-secondary">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome back, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-muted-foreground">Total Products</h3>
            <Package className="text-primary" />
          </div>
          <p className="text-3xl font-bold text-secondary">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-muted-foreground">New Inquiries</h3>
            <ShoppingCart className="text-primary" />
          </div>
          <p className="text-3xl font-bold text-secondary">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-muted-foreground">Total Views</h3>
            <LayoutDashboard className="text-primary" />
          </div>
          <p className="text-3xl font-bold text-secondary">1,234</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6">
        <h3 className="font-bold text-lg mb-4 text-secondary">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                  U{i}
                </div>
                <div>
                  <p className="font-medium text-secondary">New inquiry from User {i}</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
