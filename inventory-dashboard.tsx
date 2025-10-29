"use client"

import { Button } from "@/components/ui/button"
import { Plus, Package, TrendingUp, AlertCircle } from "lucide-react"

interface DashboardStats {
  totalItems: number
  totalValue: number
  lowStock: number
}

interface InventoryDashboardProps {
  stats: DashboardStats
  onAddClick: () => void
}

export function InventoryDashboard({ stats, onAddClick }: InventoryDashboardProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
            <p className="text-muted-foreground mt-1">Manage your stock with real-time updates</p>
          </div>
          <Button onClick={onAddClick} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Item
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stats.totalItems}</p>
              </div>
              <Package className="w-8 h-8 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-background rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  ${stats.totalValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-background rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Low Stock Items</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stats.lowStock}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-destructive opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
