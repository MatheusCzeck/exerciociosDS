# Reestruturação da TI — Varejo Sul S.A.
### Plano Executivo do Novo CIO

---

## Sumário

1. [Diagnóstico Crítico](#1-diagnóstico-crítico)
2. [Novo Organograma da TI](#2-novo-organograma-da-ti)
3. [Estratégia da Nova Estrutura](#3-estratégia-da-nova-estrutura)
4. [Alinhamento com o Negócio](#4-alinhamento-com-o-negócio)
5. [Plano de Transição — Primeiros 90 Dias](#5-plano-de-transição--primeiros-90-dias)

---

## 1. Diagnóstico Crítico

A estrutura antiga falha em três pontos que impactam diretamente vendas e operação:

**1. Suporte reativo e centralizado demais.** Apenas 2 técnicos de campo cobrem 310 lojas, enquanto 8 atendentes de telefone tentam resolver problemas de rede e PDV que, na prática, exigem presença física ou automação de rede. Resultado: 48h de resolução e lojas paradas sem faturar.

**2. Zero inteligência de dados e zero segurança.** Não existe time de BI (decisões de compra e estoque são feitas "no achismo") nem qualquer estrutura de cibersegurança/LGPD — a empresa opera exposta a ransomware e sem visibilidade para reverter a queda de faturamento.

**3. Desenvolvimento desequilibrado e processos engessados.** 5 analistas só "tiram dúvida" de ERP enquanto o e-commerce (que deveria crescer) tem apenas 3 desenvolvedores isolados. Some a isso um PMO 100% cascata, com 4 pessoas produzindo documentação em vez de entregar valor rápido.

---

## 2. Novo Organograma da TI

**Total: 36 pessoas** (mesmo headcount, redistribuído — sem aumento de custo fixo)

```
DIRETOR DE TI / CIO (1)
│
├── 1. GOVERNANÇA, SEGURANÇA E DADOS — GSD (5)
│    ├─ Coordenador de Segurança da Informação e LGPD (1)
│    ├─ Analista de Cibersegurança / SOC (1)
│    ├─ Coordenador de Dados e BI (1)
│    └─ Analistas de Dados / BI (2)
│
├── 2. INFRAESTRUTURA E CLOUD (6)
│    ├─ Coordenador de Infraestrutura e Cloud (1)
│    ├─ Arquiteto de Redes (SD-WAN) (1)
│    ├─ Administradores de Cloud / SaaS (2)
│    └─ Técnicos de Redes e Cabeamento (2)
│
├── 3. CENTRAL DE OPERAÇÕES E SUPORTE — COS (15)
│    ├─ Gerente de Operações e Suporte (1)
│    ├─ NOC — Monitoramento Proativo 24/7 (3)
│    ├─ Service Desk N1 (com triagem digital / chatbot) (4)
│    ├─ Técnicos de Campo Regionais N2 (6, divididos por macrorregião)
│    └─ Analista de Automação e Autoatendimento (1)
│
├── 4. SQUADS DE DESENVOLVIMENTO E PRODUTO (8)
│    ├─ Gerente de Produto e Tecnologia (1)
│    ├─ Squad ERP / Backoffice (3)
│    └─ Squad E-commerce / Omnichannel (4)
│
└── 5. ESCRITÓRIO ÁGIL DE VALOR (1)
     └─ Agile Coach / Scrum Master
```

### O que mudou

| Situação | Antes | Depois |
|---|---|---|
| Cibersegurança / LGPD | Inexistente | **Criado** — 2 pessoas dedicadas |
| Dados / BI | Inexistente | **Criado** — 3 pessoas dedicadas |
| Técnicos de campo | 2 para 310 lojas | **Remanejado** — 6, por macrorregião |
| Analistas "tira-dúvida" de ERP | 5 | **Reduzido** para 3, parte migrada para Dados/Segurança |
| Administradores de servidor físico | 3 | **Remanejado** para Cloud/SaaS |
| PMO Cascata + Documentação | 4 pessoas | **Extinto** — vira Agile Coach (1) + PO nos squads |
| Devs E-commerce | 3 isolados | **Ampliado** para 4, integrados em squad único com backoffice |

---

## 3. Estratégia da Nova Estrutura

**Por que criar Governança, Segurança e Dados (GSD)?**
Hoje a empresa decide no escuro (sem BI) e está exposta (sem segurança). Juntar as duas frentes num só núcleo — dados que orientam decisão e segurança que protege esses dados — resolve o "achismo" do Marketing/Vendas e fecha a maior vulnerabilidade da companhia (LGPD e ransomware) com apenas 5 pessoas.

**Como a Central de Operações resolve o problema das 310 lojas?**
Trocamos "apagar incêndio" por **prevenção + regionalização**. O NOC monitora VPN/link antes que a loja perceba a queda (que hoje é 40% dos chamados). Self-service e chatbot absorvem senha/acesso (20% dos chamados) sem precisar de humano. Os técnicos de campo saem de 2 para 6, organizados por macrorregião — cobertura real do estado, não mais um "corre-corre" nacional com dois técnicos.

**Por que squads em vez de áreas separadas de ERP e E-commerce?**
Hoje o e-commerce "perde feio" porque não conversa com o estoque do backoffice. Colocar os dois em squads próximos, com um Gerente de Produto único, obriga a integração de estoque/omnichannel a acontecer por desenho, não por sorte.

**Por que trocar o PMO cascata por um Agile Coach?**
Documentação de 8-12 meses de atraso não serve para uma empresa perdendo mercado todo mês. Um Agile Coach guiando os squads em ciclos curtos (sprints) troca "relatório extenso" por "entrega que já está no ar".

---

## 4. Alinhamento com o Negócio

**Compras:** Dados/BI entrega giro de estoque e curva ABC em tempo real — Compras deixa de comprar "no feeling" e passa a repor o que realmente vende, reduzindo ruptura e capital parado.

**Vendas / Marketing:** BI cruza histórico de compra com perfil de cliente — permitindo campanhas segmentadas e redução de churn. Squad de E-commerce integrado ao estoque do backoffice acaba com "vendeu no site, não tinha na loja".

**Logística / Operação de Loja:** Central de Operações com NOC proativo e técnicos regionais tira a loja do "caixa parado 48h" — meta de menos de 4h reduz venda perdida diretamente no PDV.

**Toda a empresa:** Segurança e LGPD protegem contra a paralisação total de um ataque de ransomware, que seria um risco existencial para o faturamento já em queda.

---

## 5. Plano de Transição — Primeiros 90 Dias

**Dias 1–30 — Estancar a sangria**
- Implantar NOC básico de monitoramento de VPN/link (resolve 40% dos chamados na raiz) e portal de autoatendimento para reset de senha (resolve 20%).
- Redistribuir os 2 técnicos de campo atuais + remanejar 4 pessoas da antiga estrutura para formar as 6 posições regionais imediatamente — sem esperar contratação externa.

**Dias 31–60 — Fechar as maiores brechas**
- Contratar/realocar o Coordenador de Segurança e rodar um diagnóstico rápido de vulnerabilidades críticas (backup, acessos, LGPD) nas lojas e na matriz.
- Formar o núcleo de Dados/BI com um dashboard mínimo viável de vendas e estoque para gerência, usando dados que já existem no ERP (sem esperar projeto novo).

**Dias 61–90 — Iniciar o novo ritmo de entrega**
- Unificar os squads de ERP e E-commerce sob um Gerente de Produto único e rodar o primeiro ciclo ágil de 2 semanas, com uma entrega pequena e visível (ex.: sincronizar estoque online/loja).
- Extinguir formalmente o PMO cascata, migrando os analistas de documentação para os squads ou para o time de Dados, conforme perfil.

---

*Documento preparado para apresentação ao CEO e Conselho da Varejo Sul S.A.*
 
