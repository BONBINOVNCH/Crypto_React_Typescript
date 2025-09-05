import { create } from "zustand";

type Store = {
    coin: string;
    setCoin: (coin: string) => void;
};

export const useStore = create<Store>()((set) => ({
    coin: "",
    setCoin: (coin: string) => set({ coin }),
}));
