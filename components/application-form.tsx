"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Upload, Loader2, AlertCircle } from "lucide-react"

type FormData = {
  fullName: string
  email: string
  phone: string
  businessName: string
  businessType: string
  location: string
  grantAmount: string
  businessDescription: string
  grantPurpose: string
  proposal: File | null
}

export function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    location: "",
    grantAmount: "",
    businessDescription: "",
    grantPurpose: "",
    proposal: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, proposal: file }))
  }

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-[#00994C]">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#00994C]/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#00994C]" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
            Thank you for applying to Grantera. We've received your application and will review it carefully. You'll
            hear from us within 2-4 weeks.
          </p>
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to{" "}
            <span className="font-semibold text-foreground">{formData.email}</span>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle>Grant Application</CardTitle>
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
          </div>
          <CardDescription>
            {step === 1 && "Tell us about yourself"}
            {step === 2 && "Tell us about your business"}
            {step === 3 && "Upload your business proposal"}
          </CardDescription>
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${s <= step ? "bg-[#00994C]" : "bg-muted"}`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234 XXX XXX XXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location (City, State) *</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Lagos, Lagos State"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Business Information */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your Business Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type/Industry *</Label>
                <Input
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  placeholder="e.g., E-commerce, Agriculture, Technology"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grantAmount">Grant Amount Requested (₦) *</Label>
                <Input
                  id="grantAmount"
                  name="grantAmount"
                  type="number"
                  value={formData.grantAmount}
                  onChange={handleInputChange}
                  placeholder="500000"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessDescription">Business Description *</Label>
                <Textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  placeholder="Briefly describe what your business does..."
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grantPurpose">How will you use the grant? *</Label>
                <Textarea
                  id="grantPurpose"
                  name="grantPurpose"
                  value={formData.grantPurpose}
                  onChange={handleInputChange}
                  placeholder="Explain how the grant will help grow your business..."
                  rows={4}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Proposal Upload */}
          {step === 3 && (
            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please upload a detailed business proposal (PDF format, max 10MB) outlining your business plan, goals,
                  and expected impact.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label htmlFor="proposal">Business Proposal (PDF) *</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-[#00994C] transition-colors">
                  <input
                    id="proposal"
                    name="proposal"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label htmlFor="proposal" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    {formData.proposal ? (
                      <div>
                        <p className="font-medium text-foreground mb-1">{formData.proposal.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(formData.proposal.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium text-foreground mb-1">Click to upload your proposal</p>
                        <p className="text-sm text-muted-foreground">PDF format, max 10MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <Alert className="border-[#FFB800] bg-[#FFB800]/5">
                <AlertCircle className="h-4 w-4 text-[#FFB800]" />
                <AlertDescription>
                  <p className="font-semibold mb-1 text-[#003366]">Commitment Fee: ₦5,000</p>
                  <p className="text-sm text-foreground/80">
                    A non-refundable commitment fee will be required after submission to process your application.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={handleNext} className="flex-1 bg-primary hover:bg-secondary text-white">
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting || !formData.proposal}
                className="flex-1 bg-primary hover:bg-secondary text-white disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
