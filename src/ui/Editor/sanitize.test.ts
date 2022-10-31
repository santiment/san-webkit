/**
 * @jest-environment jsdom
 */

import { htmlToMarkdown, markdownToHTML } from './markdown'

const sanitize = (md: string) => {
  const div = document.createElement('div')
  div.innerHTML = markdownToHTML(md)
  return htmlToMarkdown(div)
}

// NOTE: https://raw.githubusercontent.com/cujanovic/Markdown-XSS-Payloads/master/Markdown-XSS-Payloads.txt
// NOTE: https://makandracards.com/makandra/481451-testing-for-xss-in-markdown-fields
const EXAMPLES = [
  '[a](javascript:prompt(document.cookie))',
  '[a](j    a   v   a   s   c   r   i   p   t:prompt(document.cookie))',
  '![a](javascript:prompt(document.cookie))\\',
  '![a](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)\\',
  '[a](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)',
  '[a](&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29)',
  '![a\'"`onerror=prompt(document.cookie)](x)\\',
  '[citelol]: (javascript:prompt(document.cookie))',
  '[notmalicious](javascript:window.onerror=alert;throw%20document.cookie)',
  '[test](javascript://%0d%0aprompt(1))',
  '[test](javascript://%0d%0aprompt(1);com)',
  '[notmalicious](javascript:window.onerror=alert;throw%20document.cookie)',
  '[notmalicious](javascript://%0d%0awindow.onerror=alert;throw%20document.cookie)',
  '[a](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)',
  '[clickme](vbscript:alert(document.domain))',
  '[text](http://danlec.com " [@danlec](/danlec) ")',
  '[a](javascript:this;alert(1))',
  '[a](javascript:this;alert(1&#41;)',
  '[a](javascript&#58this;alert(1&#41;)',
  '[a](Javas&#99;ript:alert(1&#41;)',
  '[a](Javas%26%2399;ript:alert(1&#41;)',
  '[a](javascript:alert&#65534;(1&#41;)',
  '[a](javascript:confirm(1)',
  '[a](javascript://www.google.com%0Aprompt(1))',
  '[a](javascript://%0d%0aconfirm(1);com)',
  '[a](javascript:window.onerror=confirm;throw%201)',
  '[a](\u0001javascript:alert(document.domain&#41;)',
  '[a](javascript://www.google.com%0Aalert(1))',
  '[a](\'javascript:alert("1")\')',
  '[a](JaVaScRiPt:alert(1))',
  // '![a](https://www.google.com/image.png"onload="alert(1))',
  '![a]("onerror="alert(1))',
  '[XSS](.alert(1);)',
  // '[ ](https://a.de?p=[[/data-x=. style=background-color:#000000;z-index:999;width:100%;position:fixed;top:0;left:0;right:0;bottom:0; data-y=.]])',
  '[ ](http://a?p=[[/onclick=alert(0) .]])',
  '[a](javascript:new%20Function`al\\ert\\`1\\``;)',
  '[XSS](javascript:prompt(document.cookie))',
  '[XSS](j    a   v   a   s   c   r   i   p   t:prompt(document.cookie))',
  '[XSS](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)',
  '[XSS](&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29)',
  '[XSS]: (javascript:prompt(document.cookie))',
  '[XSS](javascript:window.onerror=alert;throw%20document.cookie)',
  '[XSS](javascript://%0d%0aprompt(1))',
  '[XSS](javascript://%0d%0aprompt(1);com)',
  '[XSS](javascript:window.onerror=alert;throw%20document.cookie)',
  '[XSS](javascript://%0d%0awindow.onerror=alert;throw%20document.cookie)',
  '[XSS](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)',
  '[XSS](vbscript:alert(document.domain))',
  '[XSS](javascript:this;alert(1))',
  '[XSS](javascript:this;alert(1&#41;)',
  '[XSS](javascript&#58this;alert(1&#41;)',
  '[XSS](Javas&#99;ript:alert(1&#41;)',
  '[XSS](Javas%26%2399;ript:alert(1&#41;)',
  '[XSS](javascript:alert&#65534;(1&#41;)',
  '[XSS](javascript:confirm(1)',
  '[XSS](javascript://www.google.com%0Aprompt(1))',
  '[XSS](javascript://%0d%0aconfirm(1);com)',
  '[XSS](javascript:window.onerror=confirm;throw%201)',
  '[XSS](�javascript:alert(document.domain&#41;)',
  '![XSS](javascript:prompt(document.cookie))\\',
  '![XSS](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)\\',
  '![XSS\'"`onerror=prompt(document.cookie)](x)\\',
]

describe('sanitizing xss links and img', () => {
  const test = (input, expected) => it(input, () => expect(sanitize(input)).toEqual(expected))

  test(' [santiment](https://santiment.net/) ', '[santiment](https://santiment.net/)')

  test('[]() test ()', 'test ()')

  EXAMPLES.forEach((input) => {
    const div = document.createElement('div')
    div.innerHTML = markdownToHTML(input)

    it(input, () => {
      expect(div.querySelectorAll('a').length || div.querySelectorAll('img').length).toBe(0)
    })
  })
})
