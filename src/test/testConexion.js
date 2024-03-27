const { ConexionBD } = require("../database/connection");

// Función para validar la conexión con SQL Server
function validarConexionSQLServer() { 
    const connection = new ConexionBD();
    return connection.sqlConnection().then((res) => {
        connection.closeConnection();
        return true;
    }).catch((err) => {
        return false;
    }); 
}

// Función para validar la conexión con MySQL
function validarConexionMySQL() {
    const connection = new ConexionBD();
    return connection.mysqlConnection().then((res) => {
        connection.closeConnection();
        return true;
    }).catch((err) => {
        return false;
    });  
}

// Función para mostrar el mensaje de conexión
function mostrarMensajeConexion(conectado, instancia) {
    if (conectado) {
        console.log(`${instancia} Conectado`);
    } else {
        console.log(`${instancia} Desconectado` );
    }
}

// Ejemplo de uso
const validarConexion = ()=> { 
    mostrarMensajeConexion(validarConexionSQLServer(), "SQL Server");
    mostrarMensajeConexion(validarConexionMySQL(), "MySQL");
}


 


module.exports = { validarConexion }