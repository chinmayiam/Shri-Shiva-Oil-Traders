import { Product } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden bg-muted/30 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground hover:bg-primary font-serif">
          Premium
        </Badge>
      </div>
      
      <CardHeader>
        <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{product.category}</div>
        <CardTitle className="font-serif text-2xl text-secondary">{product.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {product.description}
        </p>
        
        <div className="bg-muted/30 rounded-lg p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-left">
                <th className="pb-2 text-muted-foreground font-medium">Quantity</th>
                <th className="pb-2 text-right text-muted-foreground font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {product.prices.map((price, idx) => (
                <tr key={idx} className="border-b border-border/50 last:border-0">
                  <td className="py-2 font-medium">{price.quantity}</td>
                  <td className="py-2 text-right font-bold text-secondary">₹{price.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
      
      <CardFooter className="gap-2 pt-2">
        <Button className="flex-1 bg-secondary hover:bg-secondary/90 gap-2" asChild>
          <a href="tel:+918197379716">
            <Phone size={16} /> Call
          </a>
        </Button>
        <Button className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2" asChild>
          <a href={`https://wa.me/918197379716?text=I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
