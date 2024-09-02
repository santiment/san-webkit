export function onSupportClick(e) {
    if (window.Intercom)
        e?.preventDefault();
    window.Intercom?.('show');
}
