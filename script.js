//en javascript yo puedo acceder a objetos/etiquetas de mi html

//aqui tenemos los dos formulario definidos en mi javascript
const formularioUser1 = document.querySelector('#formulario-usuario-1');
const formularioUser2 = document.querySelector('#formulario-usuario-2');

//definir el contenedor donde despues yo voy a insertar los mensajes de cada usuario.
const chatContainer = document.querySelector('#chatContainer');

chatContainer.style.display = 'flex';
chatContainer.style.flexDirection = 'column';
chatContainer.style.gap = '10px';
chatContainer.style.padding = '10px';
chatContainer.style.paddingTop = '2rem';
chatContainer.style.paddingRight = '2rem';

formularioUser1.addEventListener('submit', (e)=> {
    e.preventDefault(); // evita que el formulario se envie sin previo aviso
    const mensaje = document.querySelector('#user-one-input').value; // almacena el valor del input en una constante 'mensaje'

    if (mensaje) {
        const contenedorMensaje = document.createElement('div'); //creo un div
        contenedorMensaje.style.backgroundColor = 'lightblue'
        contenedorMensaje.style.padding = '.5rem'
        contenedorMensaje.style.width = 'fit-content'
        contenedorMensaje.innerHTML = mensaje; // asigno el valor de 'mensaje' al div
    
        
        chatContainer.appendChild(contenedorMensaje);
    } else {
        alert('debes ingresar un mensaje para verlo en pantalla')
    }
    
    chatContainer.style.alignItems = 'flex-end'

    chatContainer.scrollTop = chatContainer.scrollHeight


    document.querySelector('#user-one-input').value = ''
})

formularioUser2.addEventListener('submit', (e)=> {
    e.preventDefault(); // evita que el formulario se envie sin previo aviso
    const mensaje = document.querySelector('#user-two-input').value; // almacena el valor del input en una constante 'mensaje'

    if (mensaje) {
        const contenedorMensaje = document.createElement('div'); //creo un div
        contenedorMensaje.style.backgroundColor = 'red'
        contenedorMensaje.style.padding = '.5rem'
        contenedorMensaje.style.width = 'fit-content'
        contenedorMensaje.innerHTML = mensaje; // asigno el valor de 'mensaje' al div
    
        
        chatContainer.appendChild(contenedorMensaje);
    } else {
        alert('debes ingresar un mensaje para verlo en pantalla')
    }
 
    chatContainer.style.alignItems = 'flex-end'

    chatContainer.scrollTop = chatContainer.scrollHeight

    document.querySelector('#user-two-input').value = ''
})