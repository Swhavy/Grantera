import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Grantera</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering Nigerian entrepreneurs and small businesses with grants to turn their dreams into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="#apply"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Lagos, Nigeria</li>
              <li>info@grantera.ng</li>
              <li>+234 XXX XXX XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Grantera. All rights reserved. Empowering the Nigerian dream.</p>
        </div>
      </div>
    </footer>
  )
}
