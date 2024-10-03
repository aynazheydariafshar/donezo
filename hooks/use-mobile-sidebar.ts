import { MobileSidebarStore } from '@/types/mobile-sidebar-store'
import { create } from 'zustand'

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),    
    onClose: () => set({ isOpen: false }),
}))
