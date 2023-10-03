const messagesList = document.querySelector("div.messages-list");
const formChat = document.querySelector("#form-chat-send");

function scrollMessagesToBottom() {
  messagesList.scrollTop = messagesList.scrollHeight;
}

function addMessage(event) {
  event.preventDefault();

  // .value recupera o valor de leitura/conteúdo de um campo inputável
  const message = document.querySelector("#message")?.value;
  if (message?.trim() === "") {
    alert("Informe uma mensagem válida antes de enviar");
    return;
  }

  // se chegar aqui é pq preencheu algo
  const messageElement = document.createElement("div");
  messageElement.classList.add("message-item", "message-user");
  messageElement.innerHTML = `<div class="msg-user"><strong>Você diz:</strong></div>
                              <div class="msg-chat">${message}</div>`;

  // aqui adicionamos a mensagem criada em tela dentro do elemento certo
  messagesList.appendChild(messageElement);
  // limpamos o form para outra mensagem
  formChat.reset();
  // e forçamos uma "rolagem" para  nova mensagem aparecer como última
  scrollMessagesToBottom();
}

formChat.addEventListener("submit", addMessage);
scrollMessagesToBottom();
