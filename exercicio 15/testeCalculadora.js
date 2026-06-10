// Importamos a função que AINDA NÃO EXISTE
const { soma } = require('./calculadora');

console.log("Iniciando testes da Calculadora...\n");

// Cenário de Teste 1: Deve somar dois números positivos corretamente
const resultadoEsperado = 5;
const resultadoObtido = soma(2, 3);

if (resultadoObtido !== resultadoEsperado) {
    throw new Error(`❌ Teste Falhou: Esperava ${resultadoEsperado}, mas recebeu ${resultadoObtido}`);
}

console.log("✅ Teste 1: soma(2, 3) passou com sucesso!");
