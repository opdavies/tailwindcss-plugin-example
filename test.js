const cssMatcher = require('jest-matcher-css')
const plugin = require('./index.js')
const { generateUtilities } = require('tailwindcss-plugin-test-helpers')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the default classes', () => {
  const output = `
    .test {
      display: block
    }
  `

  generateUtilities(plugin).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})
