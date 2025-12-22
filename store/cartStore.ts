import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string | number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  color: string; // <--- جدید
  size: string;  // <--- جدید
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  decreaseItem: (id: string | number, color: string, size: string) => void; // تغییر برای تشخیص دقیق محصول
  removeItem: (id: string | number, color: string, size: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem) => {
        const currentItems = get().items;
        // محصولی تکراریه که هم آیدی، هم رنگ و هم سایزش یکی باشه
        const existingItem = currentItems.find((item) => 
          item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
        );

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              (item.id === newItem.id && item.color === newItem.color && item.size === newItem.size)
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...newItem, quantity: 1 }] });
        }
      },

      decreaseItem: (id, color, size) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => 
          item.id === id && item.color === color && item.size === size
        );

        if (existingItem && existingItem.quantity > 1) {
          set({
            items: currentItems.map((item) =>
              (item.id === id && item.color === color && item.size === size)
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          });
        }
      },

      removeItem: (id, color, size) =>
        set((state) => ({
          items: state.items.filter((item) => !(item.id === id && item.color === color && item.size === size)),
        })),

      clearCart: () => set({ items: [] }),

      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce((total, item) => {
            const priceNumber = parseInt(item.price.replace(/,/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())); 
            const finalPrice = isNaN(priceNumber) ? 0 : priceNumber;
            return total + (finalPrice * item.quantity);
        }, 0);
      }
    }),
    {
      name: 'luxe-cart-storage',
    }
  )
);