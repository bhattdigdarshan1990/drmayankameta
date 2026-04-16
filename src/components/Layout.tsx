import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className={cn(
        "py-2 px-4 hidden md:block transition-colors duration-300",
        location.pathname === "/" && !isScrolled ? "bg-transparent text-white/80" : "bg-slate-900 text-slate-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wider uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className={cn(location.pathname === "/" && !isScrolled ? "text-white" : "text-blue-400")} /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className={cn(location.pathname === "/" && !isScrolled ? "text-white" : "text-blue-400")} /> contact@drmayankameta.com
            </span>
          </div>
          <div className="flex gap-4">
            <Facebook size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
            <Twitter size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          location.pathname === "/" && !isScrolled
            ? "bg-transparent border-transparent"
            : "bg-white/80 backdrop-blur-md py-3 shadow-sm border-slate-200"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-xl tracking-tight leading-none transition-colors",
                location.pathname === "/" && !isScrolled ? "text-white" : "text-slate-900"
              )}>
                Dr. Mayank Ameta
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-blue-600">Medical Excellence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  location.pathname === "/" && !isScrolled
                    ? "text-white/80 hover:text-white"
                    : location.pathname === item.path ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5",
                      location.pathname === "/" && !isScrolled ? "bg-white" : "bg-blue-600"
                    )}
                  />
                )}
              </Link>
            ))}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 border-none">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                className={cn(
                  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 size-8 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                  location.pathname === "/" && !isScrolled ? "text-white hover:bg-white/10" : "text-slate-900"
                )}
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "text-lg font-semibold transition-colors hover:text-blue-600",
                        location.pathname === item.path ? "text-blue-600" : "text-slate-900"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">Dr. Mayank Ameta</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-blue-400">Medical Excellence</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Dedicated to providing the highest quality medical care with a focus on patient comfort and advanced treatment methods.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Linkedin size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">General Consultation</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Specialized Surgery</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Diagnostic Imaging</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Emergency Care</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Post-Op Recovery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span>123 Medical Plaza, Health City,<br />Udaipur, Rajasthan 313001</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span>contact@drmayankameta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Mayank Ameta. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
