const icon = (id, attrs = '') =>
  `<svg${attrs}><use href="${process.env.MEDIA_PATH}/sprites/editor/${id}.svg#0" /></svg>`
export const anchor = {
  contentDefault: icon('link'),
}
const BOLD = {
  name: 'bold',
  action: 'bold',
  tagNames: ['b'],
  contentDefault: icon('bold'),
  useQueryState: true,
}
const ITALIC = {
  name: 'italic',
  action: 'italic',
  tagNames: ['i'],
  contentDefault: icon('italic'),
  useQueryState: true,
}
const H2 = {
  name: 'h2',
  action: 'append-h2',
  tagNames: ['h2'],
  contentDefault: icon('title'),
}
const H3 = {
  name: 'h3',
  action: 'append-h3',
  tagNames: ['h3'],
  contentDefault: icon('subtitle', ' class="editor-subtitle"'),
}
const QUOTE = {
  name: 'quote',
  action: 'append-blockquote',
  tagNames: ['blockquote'],
  contentDefault: icon('quotes'),
}
export const TOOLBAR = {
  buttons: [BOLD, ITALIC, H2, H3, 'anchor', QUOTE],
}
export const COMMENTS_TOOLBAR = {
  buttons: [BOLD, ITALIC, 'anchor'],
}
//# sourceMappingURL=toolbar.js.map
