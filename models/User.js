const mongoose = require("mongoose")
const { model, Schema } = mongoose

// creamos la estructura de un tipo de documento (users) 
const userSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "guest"],
        required: true,
    },
     lastName: {
         type: String,
         required: true,
     },
     userName: {
         type: String,
         required: true,
     },
     password: {
         type: String,
         required: true,
     },
     email: {
         type: String,
         required: true,
     },
})

// Como primer parametro, va el nombre de la coleccion
module.exports = model("Users", userSchema)

// linea 5, lo que hacemos es instanciar un nuevo esquema, un formato para el nuevo documento, es decir
// asignale al userschema un schema 

// linea 20, lo que decimos es que vamos a exportar el modelo de users, con el formato de new schema, 
// aqui deberia permitirnos hacer un post en thunder client y si todo esta correcto enviarse de manera normal