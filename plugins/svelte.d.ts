export function componentStyleSelector(): {
    markup: ({ content, filename }: {
        content: any;
        filename: any;
    }) => {
        code: string;
        map: import("magic-string").SourceMap;
    };
};
