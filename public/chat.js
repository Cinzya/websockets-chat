// Make connection
var socket = io.connect("http://localhost:4000");

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

// emit events
btn.addEventListender('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
})


//Listen for evets
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' += data.handle + ': </strong>' + data.message + '</p>';
});