import { keyify } from '../../../utils/object.js';
const ALL_SOCIALS = keyify({
    twitter: {
        href: ({ link, text }) => `https://twitter.com/intent/tweet?title=${text}&url=${link}`,
        color: '#56A8DC',
    },
    facebook: {
        href: ({ link }) => `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    },
    discord: {
        href: () => `https://santiment.net/discord`,
        color: '#5B65EA',
    },
    'linked-in': {
        href: ({ link, text, title }) => `https://www.linkedin.com/shareArticle?mini=true&title=${title}&summary=${text}&source=santiment.net&url=${link}`,
    },
    telegram: {
        href: ({ link, text }) => `https://telegram.me/share/url?text=${text}&url=${link}`,
        color: '#5AAADB',
    },
    reddit: {
        href: ({ link, text }) => `https://reddit.com/submit?title=${text}&url=${link}`,
        color: '#EB5528',
    },
}, 'id');
export const SOCIALS = [
    ALL_SOCIALS.twitter,
    ALL_SOCIALS.facebook,
    ALL_SOCIALS['linked-in'],
    ALL_SOCIALS.telegram,
    ALL_SOCIALS.reddit,
];
export const MOBILE_SOCIALS = [
    ALL_SOCIALS.twitter,
    ALL_SOCIALS.discord,
    ALL_SOCIALS.reddit,
    ALL_SOCIALS.telegram,
];
