const cardapio = [
  { nome: "X-Burguer", preco: 18.90, categoria: "Lanches" },
  { nome: "X-Bacon", preco: 21.90, categoria: "Lanches" },
  { nome: "Combo Família", preco: 45.90, categoria: "Combos" },
  { nome: "Milkshake 500ml", preco: 15.00, categoria: "Bebidas" },
  { nome: "Batata Frita M", preco: 12.00, categoria: "Acompanhamentos" },
  { nome: "Frango Grelhado", preco: 20.00, categoria: "Lanches" },
  { nome: "Sobremesa do Dia", preco: 9.90, categoria: "Sobremesas" },
];

function filtrarPorCategoria(categoria) {
  return cardapio.filter(item => item.categoria === categoria);
}

function exibirCardapio() {
  console.log("=== Cardápio da Lanchonete do Bairro ===");
  cardapio.forEach(item => {
    console.log(`${item.nome} — R$ ${item.preco.toFixed(2)} (${item.categoria})`);
  });
}

exibirCardapio();
