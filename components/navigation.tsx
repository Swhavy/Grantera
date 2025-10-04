"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-playfair)]">
              Grantera
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
              About Us
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-secondary transition-colors">
              How It Works
            </Link>
            <Link href="#timeline" className="text-sm font-medium hover:text-secondary transition-colors">
              Timeline
            </Link>
            <Link href="#apply" className="text-sm font-medium hover:text-secondary transition-colors">
              Apply Now
            </Link>
          </div>

          <div className="hidden md:block">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white">
              <Link href="#apply">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="#about"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#how-it-works"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#timeline"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="#apply"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
            <Button asChild size="lg" className="w-full bg-primary hover:bg-secondary text-white">
              <Link href="#apply">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
