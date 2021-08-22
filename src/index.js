const data = ['div', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]];

const propertyActions = [
  {
    name: 'body',
    check: (property) => typeof property === 'string',
  },
  {
    name: 'children',
    check: (property) => property instanceof Array,
  },
  {
    name: 'attributes',
    check: (property) => property instanceof Object,
  },
];

const getPropertyName = (property) => {
  const object = propertyActions.find(({ check }) => check(property));
  return object.name;
};

const buildAttrString = (attrs) => (
  Object.keys(attrs).map((key) => ` ${key}="${attrs[key]}"`).join('')
);

const buildHtml = (data) => {
  const [tagName, ...properties] = data;

  const root = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };

  const tag = properties
    .reduce((acc, property) => {
      const propertyName = getPropertyName(property);
      return { ...acc, [propertyName]: property };
    }, root);

  return [
    `<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

document.body.innerHTML = buildHtml(data);

export default buildHtml;
