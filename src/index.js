//Aqui inicializamos en el servidor o es el punto de arranque de mi aplicacion

import app  from "./app.js";
import './database.js'
app.listen(app.get('port'),()=>
console.log("Servidor corre en el 3000"))