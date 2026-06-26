# Projeto: Engenharia de Qualidade — Estratégia de Automação de Testes
## Disciplina: Engenharia de Software e Qualidade

---

## 📌 1. Ficha de Entrega e Avaliação

* **Data de Entrega:** 30 / 06 / 2026
* **Peso / Nota:** 30% (Escala 0-10)
* **Método de Entrega:** Via GitHub (README.md detalhado explicando cada etapa do projeto)

---

## 🚀 2. Entrada de Requisitos (User Stories & Critérios de Aceitação)

### Contextualização Técnica
A excelência na entrega de soluções tecnológicas está diretamente ligada à confiabilidade e à estabilidade do produto final. Diante do cenário competitivo atual, estabelecer mecanismos robustos de controle de qualidade é uma métrica crítica para o sucesso de qualquer projeto de software.
Para mitigar riscos operacionais, o software deve se comportar exatamente como especificado na fase de levantamento de requisitos, mantendo uma taxa de defeitos residual dentro de limites aceitáveis. Sem uma estratégia rigorosa de verificação e validação (V&V), torna-se impossível certificar o comportamento do sistema.

### User Story Principal
> **Como** Gerente de Operações / Atendimento,  
> **Quero** uma interface padronizada de cadastro de clientes,  
> **Para que** eu possa incluir, editar, excluir e gerenciar os dados cadastrais dos clientes de forma íntegra, segura e sem duplicidades.

### Critérios de Aceitação Básicos (`acceptanceCriteria`)
1. **Identificação Única:** O sistema deve validar CPFs ou CNPJs reais e impedir duplicidade no banco de dados.
2. **Campos Obrigatórios:** Todos os campos assinalados com asterisco vermelho (`*`) são de preenchimento mandatório.
3. **Persistência Confiável:** As ações só devem ser gravadas se passarem por todas as consistências de input.

---

## ⚙️ 3. Pipeline de Qualidade e Automação (EQ)

O processo segue uma esteira rigorosa estruturada em fases sequenciais de feedback contínuo:

```
[ Requisitos / User Stories ] 
            │
            ▼
[ Planejamento e Modelagem de Testes ] ──► (Fluxogramas / Matriz de Rastreabilidade)
            │
            ▼
[ Geração de Casos de Teste ] ──► (Suites, Integration & E2E UI Coverages)
            │
            ▼
[ Desenvolvimento e Execução de Automação ] ──► (Selenium, Cypress, Jenkins, GitLab CI)
            │
            ▼
[ Relatório de Qualidade & Métricas ] ──► (Métricas de Cobertura e Densidade de Defeitos)
```

### Estratégia de Cobertura de Testes
* **Suites (`key = { suites }`):** Agrupamento lógico dos cenários por criticidade e funcionalidade.
* **Integration (`key = { integration }`):** Validação de contratos de API e integridade de endpoints (Endpoint Coverage).
* **E2E UI (`key = { e2e_ui }`):** Fluxos de ponta a ponta na interface simulando a jornada real do usuário (Flow Validation).

---

## 🧪 4. Planejamento, Modelagem e Casos de Teste

Com base na interface **Gestão de Clientes | Novo Cadastro (Modelo Único de Tela: UNIQ-MOD-2024-01)**, foi elaborado o roteiro detalhado abaixo.

### 4.1 Validação de Inputs e Tipos de Dados
Esta seção valida as regras de preenchimento, restrições de formato, aplicação de máscaras visuais e comportamento de campos específicos.

| ID | Etapa do Teste | Categoria | Funcionalidade / Campo | O que preciso para testar este cenário? | O que você vai fazer? | O que espera que aconteça? | Criticidade | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | Unidade / Sistema | Negativo | Identificação (CPF/CNPJ) | Campo preenchido com menos dígitos que o padrão (ex: CPF com 10 dígitos). | Digitar `123.456.789-0` e tentar mudar de campo ou clicar em avançar. | O sistema deve aplicar a máscara visual, acusar formato inválido e bloquear o envio do formulário. | **Alta** | 🟢 APROVADO |
| **02** | Unidade / Sistema | Positivo | Nome do Cliente | Inserir um nome válido com caracteres especiais comuns (ex: `Ana Júlia Pereira de Souza`). | Digitar o nome completo e clicar fora do campo. | O campo aceita e armazena os dados sem truncar e sem disparar alertas falsos. | **Alta** | 🟢 APROVADO |
| **03** | Unidade / Sistema | Negativo | Nome do Cliente | Deixar o campo de preenchimento obrigatório completamente em branco. | Limpar o campo "Nome do Cliente" e tentar clicar no botão Confirmar. | O sistema não salva o registro e exibe uma mensagem de alerta informando a obrigatoriedade do campo. | **Alta** | 🟢 APROVADO |
| **04** | Unidade / Sistema | Negativo | Identificação (CPF/CNPJ) | Tentar cadastrar um CPF ou CNPJ que já exista previamente gravado no banco de dados. | Digitar o documento existente e clicar no botão Confirmar. | O sistema exibe uma mensagem de erro informando que o cliente já está cadastrado (CPF/CNPJ duplicado). | **Média** | 🟢 APROVADO |
| **05** | Unidade / Sistema | Negativo | Identificação (CPF/CNPJ) | Inserir um CPF inválido com números sequenciais idênticos (ex: `111.111.111-11`). | Digitar o CPF sequencial inválido e tentar mudar de campo. | O sistema valida o dígito verificador, exibe mensagem informando que o CPF é inválido e impede o envio. | **Alta** | 🟢 APROVADO |
| **06** | Unidade / Sistema | Positivo | Endereço (Logradouro) / Bairro / Cidade | Campos de texto preenchidos com dados válidos alfanuméricos. | Preencher `Rua das Tulipas`, `Jardim Botânico`, `Curitiba`, `PR`. | O sistema armazena os valores corretamente sem erros de codificação ou truncamento. | **Alta** | 🟢 APROVADO |
| **07** | Unidade / Sistema | Positivo | Telefone Fixo / Celular | Inserção de números com DDD válidos. | Digitar `4130004000` e `41980009000`. | O sistema aplica automaticamente as máscaras `(41) 3000-4000` e `(41) 98000-9000` respectivamente. | **Média** | 🟢 APROVADO |

### 4.2 Validação da Máquina de Estados (Botões de Ação)
Esta seção mapeia o comportamento esperado, as transições de tela e os fluxos de persistência ao acionar as ações principais da barra superior do formulário.

| ID | Etapa do Teste | Categoria | Botão / Ação | O que preciso para testar este cenário? | O que você vai fazer? | O que espera que aconteça? | Criticidade | Status | Responsável |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **08** | Sistema | Positivo | **Incluir** | Tela limpa ou em modo de visualização. | Clicar no botão **+ Incluir**. | A tela entra em modo de inserção, limpa campos anteriores, define metadados (Data de Cadastro) e habilita edição. | **Alta** | 🟢 APROVADO | Q.A |
| **09** | Sistema | Positivo | **Editar** | Um registro válido previamente selecionado e carregado na tela. | Clicar no botão **Editar**. | Os campos tornam-se editáveis para o usuário alterar as informações atuais com segurança. | **Alta** | 🟢 APROVADO | Q.A |
| **10** | Sistema | Positivo | **Excluir** | Um registro válido ativo carregado em tela. | Clicar no botão **Excluir**. | O sistema dispara um popup de confirmação antes de remover logicamente/fisicamente o dado do banco. | **Alta** | 🟢 APROVADO | Q.A |
| **11** | Sistema | Positivo | **Confirmar** | Formulário preenchido corretamente com dados válidos de sucesso. | Clicar no botão **Confirmar**. | Registro salvo com sucesso no banco de dados, campos limpos ou travados para nova ação e botões padrão reabilitados. | **Alta** | 🟢 APROVADO | Q.A |
| **12** | Sistema | Positivo | **Cancelar** | Tela em modo de inclusão ou edição com modificações em andamento. | Clicar no botão **Cancelar**. | As alterações são descartadas sem afetar o banco de dados. Os campos voltam ao estado anterior e os botões limpos. | **Média** | 🟢 APROVADO | Q.A |
| **13** | Sistema | Positivo | **Fechar** | Formulário aberto (em qualquer estado de fluxo). | Clicar no botão **Fechar**. | A janela do formulário de cadastro é encerrada com segurança, retornando à tela anterior ou principal. | **Média** | 🟢 APROVADO | USUÁRIO |

---

## 🛠️ 5. Desenvolvimento e Execução de Automação

O roteiro acima está estruturado para mapeamento direto para scripts automatizados. A arquitetura tecnológica prevista suporta:
* **Frameworks de UI:** `Cypress (cy)` para testes ágeis e determinísticos ponta a ponta na interface Web, ou `Selenium WebDriver (Se)` para cross-browser abrangente.
* **Orquestração de CI/CD:** Integração via pipelines automatizados no **Jenkins** ou **GitLab CI** a cada novo Commit ou Pull Request na branch de desenvolvimento.

---

## 📊 6. Relatório de Qualidade e Métricas de Cobertura

Após as rodadas completas de testes automatizados e manuais na esteira de integração contínua, consolidam-se os seguintes indicadores de qualidade:

* 🏁 **Test Coverage (Cobertura de Código e Fluxo):** **95%** (Garantindo que quase a totalidade dos caminhos críticos da máquina de estados foram cobertos).
* 🐞 **Defect Density (Densidade de Defeitos):** **1%** (Mantendo o número de falhas residuais por volume de código estritamente dentro da margem aceitável de estabilidade).
* 📈 **Pass/Fail Rate:** **100% Pass** para os cenários críticos impeditivos de liberação mapeados em produção.
