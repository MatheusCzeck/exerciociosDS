# 🎵 Buscador Dinâmico de Músicas

> Projeto pedagógico desenvolvido em React + Vite que consome a **iTunes Search API** para buscar músicas em tempo real, exibindo capas de álbuns, informações dos artistas e players de áudio nativos de 30 segundos.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/iTunes_Search_API-Open-FC3C44?style=for-the-badge&logo=apple&logoColor=white)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Arquitetura de Componentes](#-arquitetura-de-componentes)
- [Contrato de Dados da API](#-contrato-de-dados-da-api)
- [Instalação e Execução](#-instalação-e-execução)
- [Passos de Desenvolvimento](#-passos-de-desenvolvimento)
- [Rubrica de Avaliação](#-rubrica-de-avaliação)
- [Roteiro do Aluno](#-roteiro-do-aluno)
- [Novidades da Versão Atual](#-novidades-da-versão-atual)

---

## 🎯 Sobre o Projeto

O **Buscador Dinâmico de Músicas** é um exercício arquitetural que valida a maturidade técnica em React através de 6 etapas progressivas. O projeto é totalmente agnóstico em relação ao domínio de dados — o que importa é a correta implementação do **ciclo unidirecional de dados**, da **componentização** e do **consumo de serviços externos**.

### Funcionalidades

- 🔍 Busca em tempo real por artistas, músicas e álbuns
- 🎵 Player de áudio nativo com prévia de 30 segundos (via iTunes)
- 🖼️ Capas de álbuns em alta resolução (400x400)
- ✨ Interface dark premium com tema preto e roxo
- 📱 Layout responsivo para desktop, tablet e mobile
- 🎞️ Animações de entrada com `fadeInUp` nos cards
- 🔄 Estados de carregamento, sucesso e vazio

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 18+ | Biblioteca de UI e gerenciamento de estado |
| Vite | 5+ | Bundler e servidor de desenvolvimento |
| JavaScript (ESM) | ES2023 | Linguagem principal |
| iTunes Search API | Pública | Fonte de dados de músicas |
| CSS (Inline + index.css) | — | Estilização e animações |

---

## 📁 Estrutura de Arquivos

```
buscador-entidades/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Buscador.jsx         # Captura e controle do input do utilizador
│   │   ├── CartaoEntidade.jsx   # Apresentação isolada do item de negócio
│   │   └── GridResultados.jsx   # Layout de mapeamento da coleção
│   ├── App.jsx                  # Orquestrador (Single Source of Truth & I/O)
│   ├── index.css                # Resets, animações e variáveis globais
│   └── main.jsx                 # Ponto de entrada do ecossistema React
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🏗️ Arquitetura de Componentes

O projeto segue a hierarquia de componentes abaixo, respeitando o **fluxo de dados unidirecional** (one-way data binding) do React:

```
App.jsx  (estado global + lógica de busca)
│
├── Buscador.jsx  (input controlado + dispatch do formulário)
│
└── GridResultados.jsx  (iteração da coleção via .map())
        │
        └── CartaoEntidade.jsx  (exibição atômica de cada faixa)
```

### Responsabilidades por Componente

**`App.jsx` — Orquestrador**
- Declara e gerencia os estados globais (`resultados`, `carregando`)
- Executa a requisição assíncrona à iTunes Search API
- É a **Single Source of Truth** da aplicação
- Passa dados para baixo via `props`

**`Buscador.jsx` — Entrada de Dados**
- Controla o estado local do texto digitado (`termo`)
- Implementa o `input` como **componente controlado** (`value` + `onChange`)
- Intercepta o `onSubmit` com `e.preventDefault()`
- Despacha o termo ao pai via callback `onBuscar(termo)`

**`GridResultados.jsx` — Layout de Iteração**
- Recebe o array `conteudos` via props
- Itera com `.map()` e injeta `key={item.trackId}`
- Renderiza um `CartaoEntidade` para cada faixa

**`CartaoEntidade.jsx` — Componente Atômico**
- Componente de apresentação puro (*dumb component*)
- Recebe o objeto `payload` com os dados da música
- Exibe capa, título, artista e player de áudio `<audio>`

---

## 📦 Contrato de Dados da API

### Endpoint

```
GET https://itunes.apple.com/search?term={TERMO}&entity=song&limit=12
```

> A iTunes Search API é **totalmente aberta e pública** — não requer chave de API, cadastro ou autenticação.

### Exemplo de Requisição

```bash
# Teste direto no navegador ou via cURL:
curl "https://itunes.apple.com/search?term=jack+johnson&entity=song&limit=5"
```

### Estrutura do Payload JSON

```json
{
  "resultCount": 5,
  "results": [
    {
      "trackId": 1469577741,
      "trackName": "Upside Down",
      "artistName": "Jack Johnson",
      "collectionName": "Sing-A-Longs and Lullabies for the Film Curious George",
      "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music115/.../100x100bb.jpg",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/...",
      "releaseDate": "2005-01-01T12:00:00Z",
      "primaryGenreName": "Rock"
    }
  ]
}
```

### Mapeamento para os Componentes

| Nó do JSON | Uso no Componente | Descrição |
|---|---|---|
| `results` | `GridResultados.jsx` | Array principal para o `.map()` |
| `trackId` | `key={item.trackId}` | Identificador único para reconciliação |
| `trackName` | `CartaoEntidade.jsx` | Título da faixa |
| `artistName` | `CartaoEntidade.jsx` | Nome do artista |
| `artworkUrl100` | `CartaoEntidade.jsx` | URL da capa (substituída por `400x400bb`) |
| `previewUrl` | `<audio src={...}>` | Prévia de áudio de 30 segundos |

---

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js `18+`
- npm `9+` ou yarn

### Passo a passo

```bash
# 1. Clone ou inicialize o projeto com Vite
npm create vite@latest buscador-entidades -- --template react

# 2. Acesse o diretório
cd buscador-entidades

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:5173`.

---

## 📚 Passos de Desenvolvimento

### Passo 1 — Provisionamento e Setup Inicial

**Objetivo:** Validar a compreensão da estrutura de diretórios, ESM e a inicialização do React num ambiente isolado.

```bash
npm create vite@latest buscador-entidades -- --template react
cd buscador-entidades
npm install
```

Após criar o projeto, faça o **purge do boilerplate** — limpe `App.jsx` e `index.css`:

```jsx
// src/App.jsx — versão limpa pós-purge
function App() {
  return (
    <div>
      <h1>Buscador Dinâmico de Entidades</h1>
    </div>
  )
}

export default App
```

---

### Passo 2 — Definição de Domínio e Contrato de Dados

**Objetivo:** Instilar a mentalidade **API-First**. Mapear o JSON antes de escrever qualquer componente.

Teste o endpoint no navegador antes de codificar:

```
https://itunes.apple.com/search?term=jack+johnson&entity=song&limit=5
```

Identifique os nós necessários no JSON retornado:

```
✅ Array de resultados → results[]
✅ Identificador único  → trackId
✅ Título               → trackName
✅ Imagem               → artworkUrl100
✅ Descrição            → artistName + collectionName
✅ Áudio                → previewUrl
```

---

### Passo 3 — Gestão de Estado e Componentes Controlados

**Objetivo:** Implementar o React como **Single Source of Truth** com `useState`.

```jsx
// src/App.jsx
import { useState } from 'react'

function App() {
  const [resultados, setResultados]   = useState([])   // array de músicas
  const [carregando, setCarregando]   = useState(false) // estado de loading

  // ...
}
```

```jsx
// src/components/Buscador.jsx — input controlado
<input
  value={termo}
  onChange={(e) => setTermo(e.target.value)}
  placeholder="Busque por artistas ou músicas..."
/>
```

---

### Passo 4 — Orquestração de I/O Assíncrono via Eventos

**Objetivo:** Handler assíncrono no `onSubmit`. **Nunca usar `useEffect`** para esta operação — evita loops de rede.

```jsx
// src/App.jsx
const realizarBusca = async (termo) => {
  if (!termo.trim()) return

  setCarregando(true)
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termo)}&entity=song&limit=12`
    const resposta = await fetch(url)
    const dados    = await resposta.json()

    setResultados(dados.results || [])
  } catch (erro) {
    console.error("Erro na requisição:", erro)
    setResultados([])
  } finally {
    setCarregando(false)
  }
}
```

```jsx
// src/components/Buscador.jsx
const aoEnviar = (e) => {
  e.preventDefault()   // ← impede o page reload nativo
  onBuscar(termo)
}
```

> **Por que não `useEffect`?**
> Atrelar a busca ao `useEffect` com o termo como dependência dispararia uma requisição a cada caractere digitado ("G", "Gu", "Gus"...), gerando *race conditions* e esgotando o rate limit da API.

---

### Passo 5 — Renderização Declarativa e Reconciliação

**Objetivo:** Usar `.map()` com `key` única e imutável para otimizar o algoritmo de *diffing* do Virtual DOM.

```jsx
// src/components/GridResultados.jsx
{conteudos.map((item) => (
  <CartaoEntidade
    key={item.trackId}   // ← ID único e imutável do payload
    payload={item}
  />
))}
```

> **Por que `trackId` e não `index`?**
> Usar o índice do array (`index`) como `key` causa bugs silenciosos quando a lista é reordenada ou filtrada. O `trackId` é estável e vem diretamente da fonte de dados, garantindo reconciliação eficiente.

---

### Passo 6 — Refatoração Arquitetural e Clean Code

**Objetivo:** Desacoplar o *God Component* em módulos com responsabilidade única (SRP).

```jsx
// src/components/CartaoEntidade.jsx — componente atômico final
import { useState } from 'react'

function CartaoEntidade({ payload }) {
  const [isHovered, setIsHovered] = useState(false)
  const capaAltaResolucao = payload.artworkUrl100.replace('100x100bb', '400x400bb')

  return (
    <div
      className="animate-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#18181b',
        border: isHovered ? '1px solid #c084fc' : '1px solid #27272a',
        borderRadius: '16px',
        padding: '20px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
    >
      <img src={capaAltaResolucao} alt={payload.trackName} style={{ width: '100%', borderRadius: '10px' }} />
      <h3 style={{ color: '#fff', marginTop: '12px' }}>{payload.trackName}</h3>
      <p  style={{ color: '#a1a1aa' }}>{payload.artistName}</p>

      {payload.previewUrl && (
        <audio src={payload.previewUrl} controls style={{ width: '100%', marginTop: '12px' }} />
      )}
    </div>
  )
}

export default CartaoEntidade
```

---

## 📊 Rubrica de Avaliação

| Critério | Excelente (100%) | Parcial (50%) | Insuficiente (0%) |
|---|---|---|---|
| **Arquitetura & SRP** | Código modularizado em 4 ficheiros. Cada componente tem responsabilidade única e clara. | Componentização feita, mas há vazamento de escopo (lógica de dados dentro do `CartaoEntidade`). | Toda a lógica concentrada num único *God Component*. |
| **Contratos via Props** | Passagem limpa de `onBuscar`, `conteudos` e `payload` sem mutações diretas. | Passagem confusa ou com nomenclatura inadequada. | Props não utilizadas, quebrando o fluxo unidirecional. |
| **Reconciliação (Key)** | `key={item.trackId}` — ID único, estável e imutável proveniente da API. | `key` adicionada, mas usa `index` do array, gerando alertas no console. | `key` ausente no loop de renderização. |
| **I/O Assíncrono** | Requisição no `onSubmit` com `preventDefault()`, `async/await`, `try/catch/finally` e estado de loading. | Requisição funcional, mas sem feedback de loading ou tratamento de erro. | Loops infinitos de requisição ou falha de CORS não tratada. |
| **Clean Code** | Sem código morto do boilerplate. Nomenclatura semântica em português. Estrutura de pastas organizada. | Resquícios do boilerplate ou código comentado sem propósito. | Boilerplate intacto ou código ilegível. |

---

## 🗺️ Roteiro do Aluno

### Passo A — Componente Atômico (`CartaoEntidade.jsx`)

1. Crie o arquivo `src/components/CartaoEntidade.jsx`
2. Mova a estrutura visual (imagem, título, artista, player) para dentro dele
3. Garanta que recebe **apenas** a prop `payload` — sem lógica de busca
4. Implemente o hover com `useState` e `onMouseEnter`/`onMouseLeave`

### Passo B — Layout de Iteração (`GridResultados.jsx`)

1. Crie `src/components/GridResultados.jsx`
2. Importe e renderize `CartaoEntidade`
3. Receba o array via prop `conteudos`
4. Use `.map()` com **`key={item.trackId}`** obrigatoriamente

### Passo C — Entrada de Dados (`Buscador.jsx`)

1. Crie `src/components/Buscador.jsx`
2. Declare o estado local `termo` com `useState`
3. Amarre `value={termo}` e `onChange` no `<input>` (componente controlado)
4. No `onSubmit`, chame `e.preventDefault()` e dispare `onBuscar(termo)`

### Passo D — Orquestrador (`App.jsx`)

1. Remova toda a estrutura visual do `return` — deixe apenas os estados e a lógica
2. Declare `resultados` (array) e `carregando` (boolean) com `useState`
3. Implemente `realizarBusca` como função `async` com `fetch` e `try/catch/finally`
4. Monte a árvore: `<Buscador onBuscar={realizarBusca} />` → `<GridResultados conteudos={resultados} />`

---

## ✅ Checklist de Conformidade

- [x] Projeto inicializado com `npm create vite@latest` usando template React
- [x] Boilerplate de `App.jsx` e `index.css` removido (purge completo)
- [x] API pública REST selecionada e endpoint GET isolado
- [x] Payload JSON homologado via browser antes do desenvolvimento
- [x] `useState` declarado no orquestrador `App.jsx`
- [x] Input convertido em componente controlado (`value` + `onChange`)
- [x] Handler assíncrono acoplado ao `onSubmit` (não ao `useEffect`)
- [x] `e.preventDefault()` implementado no formulário
- [x] Template Literal para construção dinâmica da URL
- [x] `fetch` + `async/await` + `try/catch/finally`
- [x] `.map()` com `key={item.trackId}` no `GridResultados`
- [x] `God Component` refatorado em `Buscador`, `GridResultados`, `CartaoEntidade`
- [x] Props explícitas (`onBuscar`, `conteudos`, `payload`) sem mutações
- [x] Player de áudio nativo `<audio>` integrado via `previewUrl`
- [x] Tema Dark Premium preto e roxo com animações `fadeInUp`

---

## 📝 Notas Técnicas

**CORS e iTunes API:** A iTunes Search API suporta requisições diretas do navegador sem necessidade de proxy. Caso encontre bloqueios de CORS em ambientes específicos, verifique as configurações do servidor de desenvolvimento.

**Resolução das Capas:** O campo `artworkUrl100` retorna imagens em 100×100px. Para melhor qualidade visual, substitua a resolução na URL:
```js
payload.artworkUrl100.replace('100x100bb', '400x400bb')
```

**Encoding da URL:** Sempre use `encodeURIComponent()` para tratar espaços e caracteres especiais no termo de busca antes de injetá-lo na URL da requisição.

---

*Projeto desenvolvido como exercício pedagógico de React — Ciclo Unidirecional de Dados, Componentização e Consumo de APIs REST.*

# 🚀 Novidades da Versão Atual

A versão atual do **VibraFM** traz uma série de melhorias que expandem significativamente as funcionalidades do projeto. O que começou como um simples buscador de músicas evoluiu para uma aplicação multimídia mais completa, moderna e otimizada para a experiência do usuário.

---

## ✨ Novos Recursos

### 🎵 Busca Multimídia
Agora é possível pesquisar diferentes tipos de conteúdo utilizando a iTunes Search API:

- Músicas
- Álbuns
- Podcasts

Isso amplia as possibilidades de navegação e descoberta de conteúdo dentro da aplicação.

---

### ❤️ Sistema de Favoritos

Os usuários podem salvar seus conteúdos preferidos para acesso rápido posteriormente.

**Funcionalidades:**

- Adicionar favoritos
- Remover favoritos
- Persistência automática com Local Storage
- Visualização exclusiva dos itens favoritados

---

### 🎧 Player Integrado

A aplicação agora conta com um player próprio para reprodução das prévias disponíveis pela API.

**Recursos do player:**

- Reprodução de áudio
- Controle de play e pause
- Exibição de tempo atual
- Barra de progresso
- Navegação entre faixas

---

### 🔍 Busca Otimizada

Foi implementado um sistema de **debounce**, evitando chamadas excessivas para a API durante a digitação.

**Benefícios:**

- Menor consumo de requisições
- Melhor desempenho
- Experiência mais fluida

---

### 🎭 Filtros Dinâmicos

Os resultados podem ser filtrados por gênero musical.

**Vantagens:**

- Navegação mais rápida
- Melhor organização dos resultados
- Descoberta facilitada de novos conteúdos

---

### 📄 Paginação

A aplicação passou a suportar carregamento progressivo de resultados.

**Benefícios:**

- Melhor performance
- Menor tempo de carregamento inicial
- Experiência semelhante a plataformas profissionais

---

### 🖼️ Lazy Loading de Imagens

As imagens são carregadas apenas quando necessário.

**Impactos positivos:**

- Menor consumo de dados
- Melhor desempenho da interface
- Carregamento mais rápido

---

## 🎨 Nova Interface

A experiência visual foi completamente aprimorada.

### Melhorias de Design

- Interface moderna
- Tema escuro
- Efeitos Glassmorphism
- Animações suaves
- Componentes mais organizados
- Feedback visual aprimorado

---

## ⚡ Melhorias de Performance

Diversas otimizações foram implementadas para tornar a aplicação mais eficiente.

### Otimizações

- Redução de renderizações desnecessárias
- Melhor gerenciamento de estados
- Carregamento otimizado de dados
- Tratamento aprimorado de erros
- Estrutura mais escalável

---

## 📈 Evolução do Projeto

### Versão Inicial

- Busca básica de músicas
- Exibição simples de resultados
- Consumo direto da API
- Interface minimalista

### Versão Atual

- Busca de músicas, álbuns e podcasts
- Sistema de favoritos
- Player multimídia
- Paginação
- Filtros por gênero
- Lazy Loading
- Debounce
- Interface premium
- Melhor performance
- Arquitetura mais organizada

---

## 🎯 Objetivo das Atualizações

As novas funcionalidades foram desenvolvidas para aproximar o projeto de aplicações reais utilizadas no mercado, demonstrando conhecimentos em:

- Consumo de APIs REST
- React Hooks
- Gerenciamento de estado
- Persistência de dados
- Performance Front-end
- Componentização
- Experiência do usuário (UX)
- Interface moderna (UI)

Essas melhorias transformam o VibraFM em um projeto mais robusto, escalável e alinhado às práticas utilizadas no desenvolvimento Front-end moderno.
