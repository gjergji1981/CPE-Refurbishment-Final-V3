import { create } from 'zustand'

export const useDeviceStore = create((set) => ({
  devices: [],
  setDevices: (devices) => set({ devices }),
}))