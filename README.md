# 📌 Sistema de Chamados Internos

Sistema web simples para controle de chamados internos de suporte, desenvolvido como solução para organização de solicitações feitas por colaboradores de uma empresa.

---

## 🚀 Objetivo do projeto

O objetivo é centralizar e organizar os chamados internos (suporte, solicitações e problemas), substituindo registros manuais (WhatsApp, e-mail e anotações), garantindo melhor controle, rastreabilidade e distribuição de tarefas entre responsáveis.

---

## 🧠 Funcionalidades

- Criação de chamados com:
  - Título
  - Descrição
  - Prioridade (baixa, média, alta)
  - Responsável
  - Data de criação automática

- Listagem de chamados em tempo real
- Persistência de dados no navegador (LocalStorage)
- Atribuição manual de responsável
- Distribuição automática de chamados (baseada na carga de trabalho)
- Organização visual simples e funcional

---

## ⚙️ Regras de negócio

- Um chamado é considerado **“em aberto”** enquanto seu status for diferente de `"fechado"`.
- A distribuição automática atribui o chamado ao responsável com menor quantidade de chamados em aberto.
- Existem 3 responsáveis fixos no sistema:
  - João
  - Maria
  - Carlos

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage (persistência local)

---

## 🏗️ Arquitetura e decisões técnicas

- **Frontend puro (Vanilla JS)**: escolha feita para simplicidade e facilidade de execução sem necessidade de backend.
- **LocalStorage**: utilizado como simulação de banco de dados, permitindo persistência local dos chamados.
- **Estrutura simples e modular**: separação entre HTML (estrutura), CSS (estilo) e JS (lógica).
- **Responsáveis fixos no código**: decisão tomada para simplificar o escopo do teste técnico.

---

## 📂 Estrutura do projeto

/index.html → estrutura da interface
/style.css → estilização da aplicação
/script.js → lógica do sistema


---

## ▶️ Como executar o projeto

1. Baixe ou clone o repositório:
```bash
git clone URL_DO_REPOSITORIO
Abra a pasta do projeto
Execute o arquivo:
index.html

Não é necessário servidor ou instalação de dependências.

📌 Possíveis melhorias futuras
Edição de chamados
Filtro por status e prioridade
Sistema de login
Backend com banco de dados real
Histórico de alterações
👨‍💻 Observação final

Este projeto foi desenvolvido com foco em simplicidade, clareza e funcionalidade, priorizando a entrega de um MVP funcional dentro do escopo proposto.



