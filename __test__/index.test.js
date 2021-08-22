import buildHtml from '../src/index.js';

describe('HtmlBuilder', () => {
  it('set1', () => {
    const data = ['div', { class: 'container' }, [
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['span'],
        ['span', { class: 'text', id: 'uniq-key' }],
      ]],
    ]];

    const actual = buildHtml(data);
    const expected = '<div class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></div>';
    expect(actual).toBe(expected);
  });

  it('set 2', () => {
    const data = ['div', [
      ['h2', { class: 'header' }, 'first header'],
        ['div', [
          ['p', 'hello, world'],
          ['p', 'good bye, world'],
          ['a', { class: 'link', href: 'https://github.com/ZoricmaTs/parser' }, 'Zori'],
        ]],
      ]];

    const actual = buildHtml(data);
    const expected = '<div><h2 class="header">first header</h2><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></div>';
    expect(actual).toBe(expected);
  });
})
