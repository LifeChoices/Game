// import oracledb package to connect to oracle database instance
const oracledb = require('oracledb');

// variable with database connection credentials
let config = {
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  connectString: 'localhost:1521/orclpdb'
};

// Function creates connection pool and establish db connection for app
const dbConnect = async() => {

  // create connection pool and connection to oracle database
  oracledb.createPool( config, ( error, pool ) => {

    if( error ){
      console.error( error.message + "\n" );
    }

    pool.getConnection( ( error, connection )=> {

      if( error ){
        console.error( error.message + "\n" )
      }

      console.log( "ORACLE Pool Water is warm!")

      connection.close( error => {
        if( error ){
          console.error( error.message + "\n" );

        }
      })

    } )
  }
  );
};


dbConnect();

// module.exports = {
//   connAndSeed
// };