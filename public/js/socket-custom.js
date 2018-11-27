var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');

})

socket.on('disconnect', function () {
    console.log('Se perdió la conexión con el servidor');

})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jose',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Servidor: ' + resp.respuesta);
});

// Escuchar información

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});