import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F6F0]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-secondary mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions about our products or want to place a bulk order? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-none shadow-md bg-secondary text-white overflow-hidden">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg text-primary shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Our Location</h4>
                        <p className="text-white/80 leading-relaxed">
                          Old Hubli Akkipete 1st Cross,<br/>
                          Hubballi, Karnataka – 580024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-lg text-primary shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Phone</h4>
                        <a href="tel:+918197379716" className="text-white/80 hover:text-white transition-colors">
                          +91 81973 79716 (Mutturaj SD)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-lg text-primary shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Email</h4>
                        <a href="mailto:shrishivaoiltraders20@gmail.com" className="text-white/80 hover:text-white transition-colors">
                          shrishivaoiltraders20@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/10 p-3 rounded-lg text-primary shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Business Hours</h4>
                        <p className="text-white/80">Everyday 10:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-sm text-white/70">
                        <span className="text-primary font-bold block mb-1">GSTIN</span>
                        29FFPPD8965C1ZW
                      </p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50">
            <h3 className="font-serif text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone</label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
