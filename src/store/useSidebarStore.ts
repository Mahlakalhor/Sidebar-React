import { create } from "zustand";

interface SidebarState {
  open: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  open: false,
  closeSidebar: () => set({ open: false }),
  toggleSidebar: () => set((state) => ({ open: !state.open })),
}));
