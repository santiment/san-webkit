import { describe, expect, it } from 'vitest'
import { markdownToHTML, markdownToPlainText } from './markdown'

describe('markdownToHTML', () => {
  it('renders ordinary markdown as before', () => {
    expect(markdownToHTML('**bold** and `code`')).toBe(
      '<p><strong>bold</strong> and <code>code</code></p>\n',
    )
    expect(markdownToHTML('# Title')).toBe('<h2>Title</h2>\n')
    expect(markdownToHTML('> quote')).toContain('<blockquote>')
    expect(markdownToHTML('1. a\n2. b')).toContain('<ol>')
  })

  it('keeps https links and drops everything else, as before', () => {
    expect(markdownToHTML('[a](https://santiment.net/x?a=1&b=2)')).toContain(
      '<a href="https://santiment.net/x?a=1&b=2">a</a>',
    )
    expect(markdownToHTML('[a](javascript:alert(1))')).toBe('<p>a</p>\n')
    expect(markdownToHTML('[a](http://insecure.example)')).toBe('<p>a</p>\n')
  })

  it.each([
    '<script>alert(1)</script>',
    '<img src=x onerror=alert(1)>',
    '<svg onload=alert(1)>',
    '<iframe src="https://evil.example"></iframe>',
    '<a href="javascript:alert(1)">x</a>',
    'text <b onclick=alert(1)>bold</b> text',
    '<div>\n<img src=x onerror=alert(1)>\n</div>',
    '<style>*{x:expression(alert(1))}</style>',
  ])('escapes raw HTML instead of rendering it: %s', (payload) => {
    const html = markdownToHTML(payload)

    // It must parse to text only: no element other than the markdown ones marked itself produced
    const root = document.createElement('div')
    root.innerHTML = html
    expect(root.querySelectorAll('script,img,svg,iframe,style,a,div,b')).toHaveLength(0)
    expect(root.querySelector('[onclick],[onerror],[onload]')).toBeNull()
    expect(root.textContent).toContain(payload.split('\n')[0].slice(0, 5))
    expect(html).toContain('&lt;')
  })

  it('shows markup inside code spans and blocks as text (unchanged)', () => {
    expect(markdownToHTML('`<b>`')).toBe('<p><code>&lt;b&gt;</code></p>\n')
  })

  it('tolerates empty input', () => {
    expect(markdownToHTML('')).toBe('')
  })
})

describe('markdownToPlainText', () => {
  it('is not affected: it still returns typed markup as text for textContent', () => {
    expect(markdownToPlainText('a <b>b</b>')).toBe('a <b>b</b>\n')
    expect(markdownToPlainText('# Title\n\n**bold**')).toContain('Title')
  })
})
