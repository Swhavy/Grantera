"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Users, FileText, CheckCircle, Clock, XCircle, MoreVertical, Search, Download, LogOut } from "lucide-react"

// Mock data for demonstration
const mockApplications = [
  {
    id: "APP001",
    fullName: "Adebayo Johnson",
    email: "adebayo@example.com",
    businessName: "TechHub Lagos",
    businessType: "Technology",
    grantAmount: "₦500,000",
    status: "pending",
    submittedDate: "2024-01-15",
  },
  {
    id: "APP002",
    fullName: "Chioma Okafor",
    email: "chioma@example.com",
    businessName: "Green Farms Nigeria",
    businessType: "Agriculture",
    grantAmount: "₦750,000",
    status: "approved",
    submittedDate: "2024-01-14",
  },
  {
    id: "APP003",
    fullName: "Ibrahim Musa",
    email: "ibrahim@example.com",
    businessName: "Fashion Forward",
    businessType: "Fashion & Retail",
    grantAmount: "₦300,000",
    status: "rejected",
    submittedDate: "2024-01-13",
  },
  {
    id: "APP004",
    fullName: "Ngozi Eze",
    email: "ngozi@example.com",
    businessName: "EduTech Solutions",
    businessType: "Education",
    grantAmount: "₦600,000",
    status: "pending",
    submittedDate: "2024-01-12",
  },
  {
    id: "APP005",
    fullName: "Oluwaseun Adeyemi",
    email: "seun@example.com",
    businessName: "HealthCare Plus",
    businessType: "Healthcare",
    grantAmount: "₦850,000",
    status: "under-review",
    submittedDate: "2024-01-11",
  },
]

export function AdminDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [applications, setApplications] = useState(mockApplications)

  const stats = {
    total: applications.length,
    pending: applications.filter((app) => app.status === "pending").length,
    approved: applications.filter((app) => app.status === "approved").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
  }

  const filteredApplications = applications.filter(
    (app) =>
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      pending: { variant: "outline", label: "Pending" },
      "under-review": { variant: "secondary", label: "Under Review" },
      approved: { variant: "default", label: "Approved" },
      rejected: { variant: "destructive", label: "Rejected" },
    }
    const config = variants[status] || variants.pending
    return (
      <Badge variant={config.variant} className={status === "approved" ? "bg-secondary hover:bg-secondary/90" : ""}>
        {config.label}
      </Badge>
    )
  }

  const handleStatusChange = (id: string, newStatus: string) => {
    setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)))
  }

  const handleLogout = () => {
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)]">Grantera Admin</h1>
              <p className="text-sm text-primary-foreground/80">Application Management Dashboard</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 hover:bg-white/20"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">All time submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending}</div>
              <p className="text-xs text-muted-foreground">Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.approved}</div>
              <p className="text-xs text-muted-foreground">Grants awarded</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rejected</CardTitle>
              <XCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.rejected}</div>
              <p className="text-xs text-muted-foreground">Not approved</p>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Grant Applications</CardTitle>
                <CardDescription>Manage and review all submitted applications</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search applications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full sm:w-[250px]"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Business</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No applications found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{app.fullName}</div>
                            <div className="text-sm text-muted-foreground">{app.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{app.businessName}</TableCell>
                        <TableCell>{app.businessType}</TableCell>
                        <TableCell className="font-medium">{app.grantAmount}</TableCell>
                        <TableCell>{getStatusBadge(app.status)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{app.submittedDate}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download Proposal
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleStatusChange(app.id, "under-review")}>
                                Mark as Under Review
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleStatusChange(app.id, "approved")}>
                                Approve Application
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleStatusChange(app.id, "rejected")}>
                                Reject Application
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
