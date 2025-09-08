import { create } from "zustand";

type Coin = {
    id: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    // додай інші поля, якщо потрібно
};

type Store<T> = {
    coin: T | undefined;
    setCoin: (coin: T | undefined) => void;

    inputCoin: string;
    setInputCoin: (coin: string) => void;
};

export const useStore = create<Store<Coin>>()((set) => ({
    coin: undefined,
    setCoin: (coin) => set({ coin }),

    inputCoin: "",
    setInputCoin: (inputCoin) => set({ inputCoin }),
}));
