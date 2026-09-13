import { createContext, useContext, useEffect, useState } from 'react'

import type { ReactNode } from 'react'
import type { OrderMenuItem } from '#/components/order/orderMenuData'

export type CartLine = {
  item: OrderMenuItem
  quantity: number
}

type OrderCartValue = {
  lines: Array<CartLine>
  itemCount: number
  subtotal: number
  deliveryFee: number
  total: number
  addItem: (item: OrderMenuItem) => void
  updateQuantity: (itemId: number, quantity: number) => void
  removeItem: (itemId: number) => void
  clearCart: () => void
}

const OrderCartContext = createContext<OrderCartValue | undefined>(undefined)
const cartStorageKey = 'restaurant-order-cart'

function isStoredCartLine(value: unknown): value is CartLine {
  if (typeof value !== 'object' || value === null) return false

  const candidate = value as { item?: unknown; quantity?: unknown }

  if (typeof candidate.item !== 'object' || candidate.item === null) {
    return false
  }

  const item = candidate.item as Partial<OrderMenuItem>

  return (
    typeof candidate.quantity === 'number' &&
    candidate.quantity > 0 &&
    typeof item.id === 'number' &&
    typeof item.category === 'string' &&
    typeof item.name === 'string' &&
    typeof item.description === 'string' &&
    typeof item.price === 'number' &&
    typeof item.image === 'string' &&
    typeof item.imageAlt === 'string'
  )
}

export function OrderCartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Array<CartLine>>([])
  const [hasLoadedStoredCart, setHasLoadedStoredCart] = useState(false)

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(cartStorageKey)

      if (storedCart) {
        const parsedCart: unknown = JSON.parse(storedCart)

        if (Array.isArray(parsedCart)) {
          setLines(parsedCart.filter(isStoredCartLine))
        }
      }
    } catch {
      window.localStorage.removeItem(cartStorageKey)
    } finally {
      setHasLoadedStoredCart(true)
    }
  }, [])

  useEffect(() => {
    if (!hasLoadedStoredCart) return

    window.localStorage.setItem(cartStorageKey, JSON.stringify(lines))
  }, [hasLoadedStoredCart, lines])

  const addItem = (item: OrderMenuItem) => {
    setLines((current) => {
      const existingLine = current.find((line) => line.item.id === item.id)

      if (existingLine) {
        return current.map((line) =>
          line.item.id === item.id
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        )
      }

      return [...current, { item, quantity: 1 }]
    })
  }

  const removeItem = (itemId: number) => {
    setLines((current) => current.filter((line) => line.item.id !== itemId))
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    setLines((current) =>
      current.map((line) =>
        line.item.id === itemId ? { ...line, quantity } : line,
      ),
    )
  }

  const clearCart = () => setLines([])
  const itemCount = lines.reduce((total, line) => total + line.quantity, 0)
  const subtotal = lines.reduce(
    (total, line) => total + line.item.price * line.quantity,
    0,
  )
  const deliveryFee = subtotal > 0 ? 650 : 0
  const total = subtotal + deliveryFee

  return (
    <OrderCartContext.Provider
      value={{
        lines,
        itemCount,
        subtotal,
        deliveryFee,
        total,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </OrderCartContext.Provider>
  )
}

export function useOrderCart() {
  const context = useContext(OrderCartContext)

  if (!context) {
    throw new Error('useOrderCart must be used within OrderCartProvider')
  }

  return context
}
