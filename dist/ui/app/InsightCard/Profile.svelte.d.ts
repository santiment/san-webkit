type $$ComponentProps = {
    user: {
        id: number;
        username: string;
        email?: null | string;
        avatarUrl?: string;
    };
    publishedAt: string;
};
declare const Profile: import("svelte").Component<$$ComponentProps, {}, "">;
type Profile = ReturnType<typeof Profile>;
export default Profile;
