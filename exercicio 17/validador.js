// Constantes de mensagens de erro para facilitar a manutenção da API
const ERROS = {
    PAYLOAD_INVALIDO: "Payload deve ser um objeto válido",
    NOME_OBRIGATORIO: "O campo 'nome' é obrigatório e deve ser um texto",
    HABILIDADES_OBRIGATORIAS: "O campo 'habilidades' deve ser um array com pelo menos um item"
};

// Funções auxiliares (Helper Functions) para isolar a lógica de tipagem complexa do JavaScript
const ehObjetoValido = (item) => item !== null && typeof item === 'object' && !Array.isArray(item);
const possuiTextoValido = (texto) => typeof texto === 'string' && texto.trim() !== '';
const possuiArrayPreenchido = (arr) => Array.isArray(arr) && arr.length > 0;

/**
 * Valida a estrutura do payload de um candidato usando Guard Clauses.
 * @param {Object} payload 
 * @returns {boolean} true se o payload for válido
 */
const validarCandidato = (payload) => {
    if (!ehObjetoValido(payload)) {
        throw new Error(ERROS.PAYLOAD_INVALIDO);
    }

    if (!possuiTextoValido(payload.nome)) {
        throw new Error(ERROS.NOME_OBRIGATORIO);
    }

    if (!possuiArrayPreenchido(payload.habilidades)) {
        throw new Error(ERROS.HABILIDADES_OBRIGATORIAS);
    }

    return true;
};

module.exports = { validarCandidato, ERROS };
