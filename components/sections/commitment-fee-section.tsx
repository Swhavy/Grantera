import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function CommitmentFeeSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Alert className="border-accent bg-accent/5">
            <AlertCircle className="h-5 w-5 text-accent" />
            <AlertTitle className="text-xl font-semibold mb-2">Commitment Fee</AlertTitle>
            <AlertDescription className="text-base leading-relaxed space-y-3">
              <p>
                To ensure serious applicants and cover administrative costs, we require a one-time, non-refundable
                commitment fee of <span className="font-semibold text-foreground">₦5,000</span>.
              </p>
              <p>
                This small fee demonstrates your commitment to your business and helps us maintain the quality of our
                review process. It's a tiny investment in your future success.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Note: The commitment fee is separate from the grant amount and is not deducted from your grant if
                approved.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}
