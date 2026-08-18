export declare function AstroSvelteCtx(svelteCtxPath: string): {
    name: string;
    hooks: {
        'astro:config:setup': (options: {
            injectScript: (stage: string, content: string) => void;
            updateConfig: (config: Record<string, unknown>) => unknown;
        }) => void;
    };
};
