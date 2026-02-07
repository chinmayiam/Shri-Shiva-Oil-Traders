import { Navbar, Footer } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/data";
import { useState } from "react";

export default function Products() {
  const products = getProducts();
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-muted/20">
      <Navbar />
      
      <div className="bg-secondary py-16 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Premium Collection</h1>
          <p className="text-white/80 max-w-xl mx-auto">Explore our range of healthy, pure, and high-quality cooking oils.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Filter */}
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-white text-muted-foreground hover:bg-white/80 border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
