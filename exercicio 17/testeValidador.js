const { validarCandidato, ERROS } = require('./validador');

console.log("Iniciando testes de Validação Estrutural (Pós-Refatoração)...\n");

// Cenário 1: Caminho Feliz
try {
    const candidatoValido = { nome: "Carlos", habilidades: ["JavaScript", "SQL"] };
    const resultado = validarCandidato(candidatoValido);
    if (resultado !== true) throw new Error("Deveria retornar true");
    console.log("✅ Teste 1 (Estrutura): Payload perfeitamente estruturado aceito.");
} catch (error) {
    console.error("❌ Teste 1 Falhou:", error.message);
}

// Cenário 2: Validação de Tipo Base
try {
    validarCandidato(null);
    console.error("❌ Teste 2 Falhou: Aceitou um payload nulo.");
} catch (error) {
    if (error.message === ERROS.PAYLOAD_INVALIDO) {
        console.log("✅ Teste 2 (Tipagem): Null/Undefined barrados corretamente com a mensagem certa.");
    } else {
        console.error("❌ Teste 2 Falhou por motivo incorreto:", error.message);
    }
}

// Cenário 3: Validação de Propriedade
try {
    const candidatoSemNome = { idade: 30, habilidades: ["Python"] };
    validarCandidato(candidatoSemNome);
    console.error("❌ Teste 3 Falhou: Aceitou candidato sem o campo nome.");
} catch (error) {
    if (error.message === ERROS.NOME_OBRIGATORIO) {
        console.log("✅ Teste 3 (Propriedade): Bloqueio de nome ausente verificado com sucesso.");
    } else {
        console.error("❌ Teste 3 Falhou por motivo incorreto:", error.message);
    }
}

// Cenário 4: Validação de Arrays
try {
    const candidatoHabilidadeInvalida = { nome: "Ana", habilidades: "Java" };
    validarCandidato(candidatoHabilidadeInvalida);
    console.error("❌ Teste 4 Falhou: Aceitou habilidades fora do formato array.");
} catch (error) {
    if (error.message === ERROS.HABILIDADES_OBRIGATORIAS) {
        console.log("✅ Teste 4 (Array): Estrutura de array validada com a mensagem certa.");
    } else {
        console.error("❌ Teste 4 Falhou por motivo incorreto:", error.message);
    }
}
