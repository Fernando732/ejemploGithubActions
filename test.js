const sum = require('./index');
const assert = require('assert');

try {
    assert.strictEqual(sum(2, 4), 5);
    console.log('Pasaron las pruebas de la funcion');
} catch (e) {
    console.error('fallo la prueba', e.message);
    process.exit(1);
}
