const sum = require('./index');
const assert = require('assert');

try {
    assert.strictEqual(sum(2, 3), 5);
    console.log('All tests passed');
} catch (e) {
    console.error('Test failed', e.message);
    process.exit(1);
}
