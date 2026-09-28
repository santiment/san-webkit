import type { Component } from 'svelte';
export type BaseTableColumn<GItem extends Record<string, unknown>> = {
    class?: string;
} & ({
    Cell: Component<{
        item: GItem;
    }>;
    format?: undefined;
} | {
    Cell?: undefined;
    format: (item: GItem, index: number) => string | number;
}) & ({
    title: string;
    Head?: undefined;
} | {
    title?: undefined;
    Head: Component;
});
