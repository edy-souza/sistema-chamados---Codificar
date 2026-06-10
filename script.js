// Responsáveis Fixos
const responsaveis = ["João", "Maria", "Carlos"];

// Banco de dados local
let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

// considerado "em aberto": status !== "fechado"

function agora() {
  return new Date().toLocaleString();
}

