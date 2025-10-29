"use client"

import { useState } from "react"
import { InventoryDashboard } from "@/components/inventory-dashboard"
import { InventoryTable } from "@/components/inventory-table"
import { AddItemDialog } from "@/components/add-item-dialog"
import { EditItemDialog } from "@/components/edit-item-dialog"

export interface InventoryItem {
  id: string
  productName: string
  sku: string
  category: string
  quantity: number
  supplier: string
  price: number
  location: string
  createdAt: Date
}

export default function Home() {
  const [items, setItems] = useState<InventoryItem[]>([
    {
      id: "1",
      productName: "Laptop Pro",
      sku: "LP-001",
      category: "Electronics",
      quantity: 45,
      supplier: "Tech Supplies Inc",
      price: 1299.99,
      location: "Warehouse A - Shelf 3",
      createdAt: new Date("2025-01-15"),
    },
    {
      id: "2",
      productName: "Wireless Mouse",
      sku: "WM-002",
      category: "Accessories",
      quantity: 120,
      supplier: "Peripheral Co",
      price: 29.99,
      location: "Warehouse B - Shelf 1",
      createdAt: new Date("2025-01-10"),
    },
    {
      id: "3",
      productName: "USB-C Cable",
      sku: "UC-003",
      category: "Cables",
      quantity: 250,
      supplier: "Cable World",
      price: 12.99,
      location: "Warehouse A - Shelf 5",
      createdAt: new Date("2025-01-08"),
    },
  ])

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null)

  const handleAddItem = (newItem: Omit<InventoryItem, "id" | "createdAt">) => {
    const item: InventoryItem = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: new Date(),
    }
    setItems([...items, item])
    setIsAddOpen(false)
  }

  const handleUpdateItem = (updatedItem: InventoryItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
    setEditingItem(null)
  }

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const stats = {
    totalItems: items.length,
    totalValue: items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    lowStock: items.filter((item) => item.quantity < 50).length,
  }

  return (
    <main className="min-h-screen bg-background">
      <InventoryDashboard stats={stats} onAddClick={() => setIsAddOpen(true)} />
      <div className="container mx-auto px-4 py-8">
        <InventoryTable items={items} onEdit={setEditingItem} onDelete={handleDeleteItem} />
      </div>

      <AddItemDialog open={isAddOpen} onOpenChange={setIsAddOpen} onAdd={handleAddItem} />

      {editingItem && (
        <EditItemDialog
          item={editingItem}
          open={!!editingItem}
          onOpenChange={(open) => !open && setEditingItem(null)}
          onUpdate={handleUpdateItem}
        />
      )}
    </main>
  )
}
