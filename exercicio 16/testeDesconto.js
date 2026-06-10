const { aplicarDescontoPorNome } = require('./desconto');

console.log("Iniciando testes da Calculadora de Descontos por Nome...\n");

// Cenário 1: Caminho Feliz - Desconto válido por nome
try {
    const resultado = aplicarDescontoPorNome('Camiseta', 20); // 'Camiseta' custa R$ 50 -> 20% = R$ 40
    if (resultado !== 40) throw new Error(`Esperava 40, recebeu ${resultado}`);
    console.log("✅ Teste 1 (Caminho Feliz): Desconto de 20% em 'Camiseta' aplicado corretamente.");
} catch (error) {
    console.error("❌ Teste 1 Falhou:", error.message);
}

// Cenário 2: Caso Extremo - Desconto maior que 100%
try {
    aplicarDescontoPorNome('Camiseta', 110);
    console.error("❌ Teste 2 Falhou: A função permitiu um desconto maior que 100%.");
} catch (error) {
    if (error.message === "Desconto inválido") {
        console.log("✅ Teste 2 (Exceção): Erro de desconto > 100% capturado corretamente.");
    } else {
        console.error("❌ Teste 2 Falhou por motivo incorreto:", error.message);
    }
}

// Cenário 3: Caso Extremo - Desconto negativo
try {
    aplicarDescontoPorNome('Camiseta', -10);
    console.error("❌ Teste 3 Falhou: A função permitiu um desconto negativo.");
} catch (error) {
    if (error.message === "Desconto inválido") {
        console.log("✅ Teste 3 (Exceção): Erro de desconto negativo capturado corretamente.");
    } else {
        console.error("❌ Teste 3 Falhou por motivo incorreto:", error.message);
    }
}

// Cenário 4: Caso de Falha - Produto inexistente
try {
    aplicarDescontoPorNome('Notebook', 10);
    console.error("❌ Teste 4 Falhou: A função aceitou um produto que não existe.");
} catch (error) {
    if (error.message === "Produto não encontrado") {
        console.log("✅ Teste 4 (Exceção): Erro de produto inexistente capturado corretamente.");
    } else {
        console.error("❌ Teste 4 Falhou por motivo incorreto:", error.message);
    }
}
