type TProps = {
    class?: string;
    version?: string;
    onClassicClick?: () => void;
    onLogout?: () => void;
};
declare const AccountDropdown: import("svelte").Component<TProps, {}, "">;
type AccountDropdown = ReturnType<typeof AccountDropdown>;
export default AccountDropdown;
