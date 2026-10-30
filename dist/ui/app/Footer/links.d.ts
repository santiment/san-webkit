type TLink = {
    href: string;
    title: string;
    onclick?: (e: MouseEvent) => void;
};
export declare const resourcesLinks: TLink[];
export declare const socialMediaLinks: {
    href: string;
    id: string;
    width: number;
    height: number;
    label: string;
}[];
export {};
