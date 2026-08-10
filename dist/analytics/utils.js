export const scriptTag = () => document.createElement('script');
export function newHeadScript(content, options, onload) {
    const script = scriptTag();
    if (content)
        script.text = content;
    Object.assign(script, options);
    if (onload)
        script.onload = onload;
    document.head.appendChild(script);
    return script;
}
