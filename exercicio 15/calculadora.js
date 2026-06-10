const soma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Os parâmetros devem ser números");
    }
    return a + b;
};

module.exports = { soma };
