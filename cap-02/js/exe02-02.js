// cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value             // obtém conteúdo dos campos
  const duracao = Number(frm.inDuracao.value)

  const horas = Math.floor(duracao / 60)        // Aredonda para baixo resultado
  const minutos = duracao % 60                  // obtém o resto da divisão

  resp1.innerText = titulo                      // Exibe as respostas
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

  e.preventDefault()                             // Evita envio do form
})