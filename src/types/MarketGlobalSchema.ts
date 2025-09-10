import * as z from "zod";

export const MarketGlobalSchema = z
    .object({
        data: z
            .object({
                active_cryptocurrencies: z.number(),
                ongoing_icos: z.number(),
                total_market_cap: z.record(z.string(), z.number()),
                total_volume: z.record(z.string(), z.number()),
                market_cap_percentage: z.record(z.string(), z.number()),
                market_cap_change_percentage_24h_usd: z.number(),
            })
            .partial(),
    })
    .partial();

export type MarketGlobalSchemaType = z.infer<typeof MarketGlobalSchema>;
