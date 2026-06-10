const produtosCadastrados = [
    { nome: 'Camiseta', preco: 50.00 },
    { nome: 'Calça', preco: 120.00 },
    { nome: 'Tênis', preco: 250.00 }
  ];
  
  const aplicarDescontoPorNome = (nomeProduto, porcentagemDesconto) => {
    if (porcentagemDesconto < 0 || porcentagemDesconto > 100) {
      throw new Error('Desconto inválido');
    }
  
    // Busca o produto ignorando letras maiúsculas/minúsculas
    const produto = produtosCadastrados.find(
      (p) => p.nome.toLowerCase() === nomeProduto.toLowerCase()
    );
  
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
  
    const fatorDesconto = 1 - (porcentagemDesconto / 100);
    const novoPreco = produto.preco * fatorDesconto;
    
    return Number(novoPreco.toFixed(2));
  };
  
  module.exports = { aplicarDescontoPorNome };
  