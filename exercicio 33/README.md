## Gabarito Teórico (Análise Arquitetural)

### 1. Por que removemos o CSS Animation tradicional?
* **Desacoplamento do Ciclo de Vida:** O CSS tradicional não se comunica nativamente com o ciclo de vida do React. Ele não sabe com precisão quando um componente monta, desmonta ou sofre re-renderizações por alteração de estado, o que frequentemente causa bugs visuais (como animações que não rodam se o componente reaparecer na tela).
* **Baixa Manutenibilidade Dinâmica:** Passar propriedades do JavaScript para alterar valores da animação em tempo de execução (como mudar a distância do `translateY` dinamicamente com base em uma *prop*) exige manipulações complexas de variáveis CSS inline (`var(--x)`), quebrando a filosofia de componentes auto-contidos.

### 2. Por que as `variants` do Framer Motion são melhores?
* **Separação de Conceitos:** Elas isolam completamente a lógica de como o componente se move (comportamento/física) da forma como o componente se renderiza (estrutura/JSX).
* **Reutilização Real (Princípio DRY):** Permitem aplicar a exata mesma física e transição de entrada em múltiplos componentes com identidades visuais totalmente diferentes, sem duplicar nenhuma linha de código de animação.
* **Orquestração de Elementos Filhos:** Quando um elemento pai utiliza `variants` (ex: `initial="hidden"`), todos os elementos filhos com Motion herdam automaticamente esses estados. Isso permite criar animações em cascata (efeito *stagger*) em listas e grids de forma nativa, elegante e simples.