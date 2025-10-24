type Social = {
    id: string;
    href: (p: {
        link: string;
        text: string;
        title: string;
    }) => string;
};
export declare const SOCIALS: Social[];
export {};
