import { AdminLayout } from "./dashboard";
import { getProducts, updateProduct, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Edit, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminProducts() {
  const [products, setProducts] = useState(getProducts());
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const handleUpdatePrice = (productId: number, priceIndex: number, newPrice: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newPrices = [...product.prices];
    newPrices[priceIndex] = { ...newPrices[priceIndex], price: parseInt(newPrice) || 0 };
    
    updateProduct(productId, { prices: newPrices });
    setProducts([...getProducts()]); // Refresh local state
    
    toast({
      title: "Price Updated",
      description: `Updated price for ${product.name}`,
    });
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-serif text-3xl font-bold text-secondary">Manage Products</h2>
          <p className="text-muted-foreground">Update prices and inventory.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus size={18} /> Add Product
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Pricing</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-contain rounded-md bg-muted/20 p-1" />
                </TableCell>
                <TableCell className="font-medium text-secondary">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {product.prices.map((price, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-12 text-muted-foreground">{price.quantity}:</span>
                        <div className="flex items-center gap-1">
                          <span>₹</span>
                          <Input 
                            className="h-6 w-20 px-1 text-right" 
                            defaultValue={price.price}
                            onBlur={(e) => handleUpdatePrice(product.id, idx, e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Edit size={18} />
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
