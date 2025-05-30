export const SUGGESTIONS = [
  [
    'Headings',
    [
      {
        id: 'heading',
        title: 'Heading 1',
        subtext: 'Top-level heading',
        aliases: ['h', 'heading1', 'h1'],
      },
      {
        id: 'heading_2',
        title: 'Heading 2',
        subtext: 'Key section heading',
        aliases: ['h2', 'heading2', 'subheading'],
      },
      {
        id: 'heading_3',
        title: 'Heading 3',
        subtext: 'Subsection and group heading',
        aliases: ['h3', 'heading3', 'subheading'],
      },
    ],
  ],

  [
    'Basic blocks',
    [
      {
        id: 'quote',
        title: 'Quote',
        subtext: 'Quote or excerpt',
        aliases: ['quotation', 'blockquote', 'bq'],
      },
      {
        id: 'numbered_list',
        title: 'Numbered List',
        subtext: 'List with ordered items',
        aliases: ['ol', 'li', 'list', 'numberedlist', 'numbered list'],
      },
      {
        id: 'bullet_list',
        title: 'Bullet List',
        subtext: 'List with unordered items',
        aliases: ['ul', 'li', 'list', 'bulletlist', 'bullet list'],
      },
      {
        id: 'paragraph',
        title: 'Paragraph',
        subtext: 'The body of your document',
        aliases: ['p', 'paragraph'],
      },

      {
        id: 'page_break',
        title: 'Page Break',
        subtext: 'Page separator',
        aliases: ['page', 'break', 'separator'],
      },
    ],
  ],

  [
    'Media',
    [
      {
        id: 'image',
        title: 'Image',
        subtext: 'Resizable image with caption',
        aliases: ['image', 'imageUpload', 'upload', 'img', 'picture', 'media', 'url'],
      },
    ],
  ],
] as [string, { id: string; title: string; subtext: string; aliases: string[] }[]][]
