// import oracledb package to connect to oracle database instance
const oracledb = require('oracledb');

//import dbSeed file
const { dbSeed } = require('./dbSeed')

// database connection credentials
let config = {
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  connectString: 'localhost:1521/orclpdb',
};


// Function - creates connection pool, establish connection to db, creates initial schema
const dbConnect = async() => {
  try {
    //create variable set to configuration of oracle connection pool
    await oracledb.createPool({
      poolAlias: 'lifeChoices',
      user: config.user,
      password: config.password,
      connectString: config.connectString
  });
    //success pool message
    console.log( "ORACLE Pool Open")

    // use dbSeed function to initialize Schema
    await dbSeed();

  } catch (error) {
    // log any connection errors
    console.error( error.message + "\n" );
  }

};

// export oracle db connection function
module.exports = {
  dbConnect
};


/*

The most helpful connection information was found at the links below:

- video explanation was great for explaining the reasoning behind connection pooling
--> https://www.youtube.com/watch?v=aTht9Va-CoE

- article gave multiple exams of connection types
--> https://blogs.oracle.com/opal/node-oracledb-connection-samples-proxies-and-external-authentication

*/
