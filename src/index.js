const express = require('express');
//hola este es mi comentario
const config = require('./server/config');

const app = config(express());

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});