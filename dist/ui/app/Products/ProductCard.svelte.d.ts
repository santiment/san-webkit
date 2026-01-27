export type TProductCard = Omit<TProps, 'active'>;
type TProps = {
    id: string;
    title: string;
    href: string;
    desc: string;
    dimensions: [number, number];
    active?: boolean;
    accent?: string;
    note?: string | undefined;
    isCompact?: boolean;
};
declare const ProductCard: import("svelte").Component<TProps, {}, "">;
type ProductCard = ReturnType<typeof ProductCard>;
export default ProductCard;
