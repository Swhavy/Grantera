import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#00994C]/5 via-background to-[#FFB800]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/20 text-[#003366] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FFB800]" />
            <span className="text-sm font-medium">Your Future Awaits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)] text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Join hundreds of Nigerian entrepreneurs who have already taken the first step toward their dreams. Your
            success story starts with a single application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-secondary text-white text-base md:text-lg px-8 py-6"
            >
              <Link href="#apply">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 bg-transparent border-primary hover:bg-primary/5"
            >
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Questions? Email us at{" "}
            <a href="mailto:info@grantera.ng" className="text-secondary hover:underline font-medium">
              info@grantera.ng
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
