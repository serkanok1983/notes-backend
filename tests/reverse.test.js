const { test } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for_testing').reverse

test('reverse of a', () => {
    const result = reverse('a')

    assert.strictEqual(result, 'a')
})

test('reverse of react', () => {
    const result = reverse('react')

    assert.strictEqual(result, 'tcaer')
})

test('reverse of serkan', () => {
    const result = reverse('serkan')

    assert.strictEqual(result, 'nakres')
})

// test('reverse of react', () => {
//     const result = reverse('react')
//     assert.strictEqual(result, 'tkaer')
// })