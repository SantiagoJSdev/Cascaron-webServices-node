const sql = require("mssql");
const mysql = require('mysql'); 

const { configSQLSERVER, configMYSQL } = require("./index");
 


const settingsSQLSERVER = {
  user: configSQLSERVER.user,
  password: configSQLSERVER.password,
  server: configSQLSERVER.server,
  database: configSQLSERVER.database,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    validateBulkLoadParameters: false,
  },
}


const settingsMYSQL = {
  host: configMYSQL.host,
  user: configMYSQL.user,
  password: configMYSQL.password,
  database: configMYSQL.database,
  port: configMYSQL.port,
};

class ConexionBD {

  constructor() {
     
  }

  async sqlConnection() {
    try {
      const pool = await sql.connect(settingsSQLSERVER);
      return { pool, sql };
    } catch (error) {
      console.log(error);
    }
  }

  async mysqlConnection() {
    return new Promise((resolve, reject) => {
      const pool = mysql.createPool(settingsMYSQL);

      pool.getConnection((error, connection) => {
        if (error) { 
          console.log(error);
          reject(error);
        } else {      
          resolve({ pool, connection }); 
          connection.release(); // Close the connection after it is used
        }
      });
    });
  } 
}

module.exports = { ConexionBD }
