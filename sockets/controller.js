const socketController =(socket)=>{
    console.log('cliente conectado',socket.id);

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado',socket.id);
    })
    // este enviar mensaje es de el metodo para recibir el msg del cliente
    socket.on('enviar-mensaje',(payload, callback)=>{
        const id = 12345
        callback(id)
        //console.log(payload);
        //enviar a solo el que hablo
        //socket.emit('mensaje-server',payload)
        //enviar a todos los clientes
        socket.broadcast.emit('mensaje-server',payload)
    })
}

export {socketController}