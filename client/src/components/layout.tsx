import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Phone, MapPin, Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src="/favicon.png" alt="shrishivaoiltraders logo" className="h-12 w-12 object-contain" />
            <span className="font-serif text-3xl font-bold text-primary tracking-tight">shrishivaoiltraders</span>
            <span className="hidden sm:inline-block text-sm text-muted-foreground tracking-widest uppercase border-l pl-2 ml-2 border-border">
              Edible Oils
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
            Order Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary text-primary-foreground mt-2">
            Call +91 81973 79716
          </Button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.png" alt="shrishivaoiltraders logo" className="h-10 w-10 object-contain" />
              <h3 className="font-serif text-2xl font-bold text-primary">shrishivaoiltraders</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Pure & Premium Cooking Oils provided with trust and quality. 
              Delivering health to your doorstep in Hubballi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><a className="text-white/80 hover:text-white transition-colors">Home</a></Link></li>
              <li><Link href="/products"><a className="text-white/80 hover:text-white transition-colors">Our Products</a></Link></li>
              <li><Link href="/contact"><a className="text-white/80 hover:text-white transition-colors">Contact Us</a></Link></li>
              <li><Link href="/admin/login"><a className="text-white/80 hover:text-white transition-colors">Admin Login</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="shrink-0 mt-1 text-primary" size={18} />
                <span>Old Hubli Akkipete 1st Cross,<br/>Hubballi, Karnataka – 580024</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="shrink-0 text-primary" size={18} />
                <a href="tel:+918197379716" className="hover:text-white">+91 81973 79716</a>
              </li>
              <li className="text-white/80 text-sm mt-4">
                <span className="opacity-60 block text-xs uppercase tracking-wider mb-1">GSTIN</span>
                29FFPPD8965C1ZW
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} shrishivaoiltraders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
