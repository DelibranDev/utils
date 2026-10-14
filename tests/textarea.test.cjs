const assert = require('node:assert/strict');
const { test } = require('node:test');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { Textarea } = require('../dist/index.js');

function render(props) {
  const errors = [];
  const original = console.error;
  console.error = (...args) => errors.push(args.join(' '));
  try {
    const html = renderToStaticMarkup(React.createElement(Textarea, props));
    assert.equal(errors.length, 0, errors.join('\n'));
    return html.match(/<textarea[^>]*>([\s\S]*?)<\/textarea>/)[1];
  } finally {
    console.error = original;
  }
}
test('legacy saved descriptions remain populated without React children warning', () => {
  assert.equal(render({ placeholder: 'Saved description' }), 'Saved description');
});
test('TPV saved notes override the prompt including an explicitly empty note', () => {
  assert.equal(render({ placeholder: 'Write a note', defaultValue: 'Saved note' }), 'Saved note');
  assert.equal(render({ placeholder: 'Write a note', defaultValue: '' }), '');
});
test('controlled notes use the current value and ignore legacy or default text', () => {
  assert.equal(render({ placeholder: 'Old', defaultValue: 'Initial', value: 'Current' }), 'Current');
  assert.equal(render({ placeholder: 'Old', value: '' }), '');
  assert.equal(render({ value: 'Updated' }), 'Updated');
});
