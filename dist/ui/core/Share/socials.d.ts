type Social = {
    id: string;
    href: (p: {
        link: string;
        text: string;
        title: string;
    }) => string;
    color?: string;
};
export declare const SOCIALS: Social[];
export declare const MOBILE_SOCIALS: Social[];
export {};
