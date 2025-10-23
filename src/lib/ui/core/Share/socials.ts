type Social = {
  id: string
  href: (p: { link: string; text: string; title: string }) => string
}

export const SOCIALS: Social[] = [
  {
    id: 'twitter',
    href: ({ link, text }) => `https://twitter.com/intent/tweet?title=${text}&url=${link}`,
  },
  {
    id: 'facebook',
    href: ({ link }) => `https://www.facebook.com/sharer/sharer.php?u=${link}`,
  },
  {
    id: 'linked-in',
    href: ({ link, text, title }) =>
      `https://www.linkedin.com/shareArticle?mini=true&title=${title}&summary=${text}&source=santiment.net&url=${link}`,
  },
  {
    id: 'telegram',
    href: ({ link, text }) => `https://telegram.me/share/url?text=${text}&url=${link}`,
  },
  {
    id: 'reddit',
    href: ({ link, text }) => `https://reddit.com/submit?title=${text}&url=${link}`,
  },
]
