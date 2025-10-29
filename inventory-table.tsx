"use client"

import type { InventoryItem } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2 } from "lucide-react"

interface InventoryTableProps {
  items: InventoryItem[]
  onEdit: (item: InventoryItem) => void
  onDelete: (id: string) => void
}

export function InventoryTable({ items, onEdit, onDelete }: InventoryTableProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Supplier</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 text-sm text-foreground font-medium">{item.productName}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{item.sku}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{item.category}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.quantity < 50 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {item.quantity}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-foreground font-medium">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{item.supplier}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{item.location}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(item)}
                      className="text-primary hover:text-primary hover:bg-primary/10"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDelete(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-muted-foreground">No inventory items yet. Add one to get started.</p>
        </div>
      )}
    </div>
  )
}
