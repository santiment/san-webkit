export function useIntersection(onIntersect, options = {}) {
    let rootEl = $state(null);
    const root = (node) => {
        rootEl = node;
        return () => {
            rootEl = null;
        };
    };
    const target = (node) => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting)
                    onIntersect(entry);
            }
        }, { ...options, root: rootEl });
        observer.observe(node);
        return () => observer.disconnect();
    };
    return {
        root,
        target,
    };
}
