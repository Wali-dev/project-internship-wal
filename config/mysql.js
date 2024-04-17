const mysql = require('mysql2');
const config = require('.');

const hireDatabaseConfig = {
  host: config.get('databaseHost'),
  user: config.get('databaseUsername'),
  password: config.get('databasePassword'),
  database: config.get('databaseNameHire'),
};

const pool = mysql.createPool(hireDatabaseConfig);

const handleDatabaseConnection = (pool, dbName) => {
  pool.getConnection((err, connection) => {
    if (err) {
      // Handle connection errors for both databases
      console.error(`Error connecting to database ${dbName}:`, err.message);
      return;
    }

    console.log(`Connected to the database ${dbName}`);
    connection.release();
  });

  // Handle database errors for both databases
  pool.on('error', (err) => {
    console.error(`Database ${dbName} error:`, err.message);
  });
};

handleDatabaseConnection(pool, config.get('databaseNameHire'));

const hireDatabase = pool.promise();

module.exports = hireDatabase;
