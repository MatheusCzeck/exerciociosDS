const BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  console.warn("Aviso: VITE_API_BASE_URL não está definida no ambiente.");
}

/**
 * Cliente HTTP customizado usando fetch nativo
 * @param {string} endpoint 
 * @param {RequestInit} options 
 */
export const apiClient = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
  }
  
  return response.json();
};