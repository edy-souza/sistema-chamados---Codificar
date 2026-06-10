// Responsáveis Fixos
const responsaveis = ["João", "Maria", "Carlos"];

// Banco de dados local
let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

// considerado "em aberto": status !== "fechado"

// Função que retorna a data e hora atual formatada como string
function agora() {
  return new Date().toLocaleString();
}

// Função responsável por preencher o select de responsáveis no formulário
function carregarResponsaveis() {
  const select = document.getElementById("responsavel");

  responsaveis.forEach(r => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    select.appendChild(option);
  });
}


// Função responsável por criar um novo chamado
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


// Função responsável por salvar os chamados no localStorage
function salvar() {
  localStorage.setItem("chamados", JSON.stringify(chamados));
}


// Função responsável por renderizar (exibir) os chamados na tela
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


// Função que define automaticamente o responsável com menor carga de trabalho
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