interface Coin {
    id: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}

export default async function useDataCoinsHistory(coin: Coin) {
    const coinHistory = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=90`,
        import.meta.env.VITE_API_KEYS
    );
    return coinHistory;
}

//  `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=90`
