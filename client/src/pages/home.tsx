import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Truck, ShieldCheck, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#F9F6F0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-oils.png" 
            alt="Premium Cooking Oils" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent sm:from-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in slide-in-from-bottom-5 duration-700">
              Pure & Premium <br/>
              <span className="text-primary">Cooking Oils</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-in slide-in-from-bottom-5 duration-700 delay-150">
              Experience the taste of purity with Shri Shiva Oil Traders. Sourced from the finest ingredients and cold-pressed to retain natural nutrients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-5 duration-700 delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full" asChild>
                <Link href="/products">View Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 text-lg px-8 py-6 rounded-full backdrop-blur-sm" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-secondary mb-6">Traditional Taste, Modern Purity</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            At Shri Shiva Oil Traders, we believe that good health starts in the kitchen. We bring you a selection of the finest edible oils, 
            extracted using traditional methods to preserve their natural goodness. From the rich aroma of Groundnut oil 
            to the light texture of Sunflower oil, every drop is a promise of quality.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Truck size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-secondary">Free Home Delivery</h3>
              <p className="text-muted-foreground">
                Enjoy free delivery on all orders above 15kg. We deliver everywhere in Hubballi, ensuring your kitchen never runs dry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-secondary">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                100% pure and unadulterated oils. We source directly from farmers and process with minimal intervention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-secondary">Local Service</h3>
              <p className="text-muted-foreground">
                Proudly serving the Hubballi community. Visit our store at Old Hubli Akkipete or order online for fast service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Call us directly or send a message on WhatsApp to place your order. 
            We ensure fast and safe delivery to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full gap-3">
              <Phone size={20} /> Call +91 81973 79716
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full gap-3" asChild>
               <Link href="/products">Browse Catalogue <ArrowRight size={20} /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
