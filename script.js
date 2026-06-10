// Responsáveis Fixos
const responsaveis = ["João", "Maria", "Carlos"];

// Banco de dados local
let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

// considerado "em aberto": status !== "fechado"

function agora() {
  return new Date().toLocaleString();
}

function carregarResponsaveis() {
  const select = document.getElementById("responsavel");

  responsaveis.forEach(r => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    select.appendChild(option);
  });
}

function criarChamado() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const prioridade = document.getElementById("prioridade").value;
  const responsavel = document.getElementById("responsavel").value;

  const chamado = {
    id: Date.now(),
    titulo,
    descricao,
    prioridade,
    status: "aberto",
    responsavel: responsavel || null,
    criadoEm: agora()
  };

  chamados.push(chamado);

  salvar();
  renderizarChamados();
}


function salvar() {
  localStorage.setItem("chamados", JSON.stringify(chamados));
}

function renderizarChamados() {
  const lista = document.getElementById("listaChamados");
  lista.innerHTML = "";

  chamados.forEach(c => {
    lista.innerHTML += `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
        <h3>${c.titulo}</h3>
        <p>${c.descricao}</p>
        <p><b>Prioridade:</b> ${c.prioridade}</p>
        <p><b>Status:</b> ${c.status}</p>
        <p><b>Responsável:</b> ${c.responsavel || "Não definido"}</p>
        <p><b>Data:</b> ${c.criadoEm}</p>
      </div>
    `;
  });
}


renderizarChamados();

function atribuirAutomatico() {
  const contagem = {};

  responsaveis.forEach(r => contagem[r] = 0);

  chamados.forEach(c => {
    if (c.status !== "fechado" && c.responsavel) {
      contagem[c.responsavel]++;
    }
  });

  let menor = responsaveis[0];

  responsaveis.forEach(r => {
    if (contagem[r] < contagem[menor]) {
      menor = r;
    }
  });

  // aplica no formulário (ok manter isso)
  document.getElementById("responsavel").value = menor;
}

carregarResponsaveis();