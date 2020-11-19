const socket = io();
const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')

chat.addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('chat', name + ": " + Input.value + "\n\n\n\n")
  Input.value = '';
  socket.on('chat', message => {
    console.log('From server: ', message)
  })
})

const chatWindow = document.querySelector('.chat-window')

const renderMessage = message => {
  const div = document.createElement('div')
  div.classList.add('render-message')
  div.innerText = message
  chatWindow.appendChild(div)
}

socket.on('chat', message => {
  // make sure to modify this
  renderMessage(message)
})
let chatty = document.querySelector("#chatSection")

/*chatty.addEventListener("scroll", function() {
    chat.style.top = "215px"
})*/
let name;
do {
  name = prompt("Name:");
} while(!name);