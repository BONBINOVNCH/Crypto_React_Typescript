"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import useDataCoins from "@/data/useDataCoins";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function Combobox() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    type NewCoin = {
        value: string;
        label: string;
    };

    const data = useDataCoins();

    if (data) {
        const newData: NewCoin[] = data!.map((coin) => ({
            value: coin.id,
            label: coin.name,
        }));

        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {value
                            ? newData.find((coin) => coin.value === value)
                                  ?.label
                            : "Select coin..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search coin..." />
                        <CommandList>
                            <CommandEmpty>No coin found.</CommandEmpty>
                            <CommandGroup>
                                {newData.map((coin) => (
                                    <CommandItem
                                        key={coin.value}
                                        value={coin.value}
                                        onSelect={(currentValue) => {
                                            setValue(
                                                currentValue === value
                                                    ? ""
                                                    : currentValue
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === coin.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        {coin.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    }
}
