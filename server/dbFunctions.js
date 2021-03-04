// import oracledb package to connect to oracle database instance
const { Email } = require('@material-ui/icons');
const e = require('express');
const oracledb = require('oracledb');


// import database connection credentials
let config = {
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  connectString: 'localhost:1521/orclpdb'
}


// Function - adds dummy data to db tables
// Object will be returned, table data in rows array of return object
const dummyData = async() => {

  try {

    // create new connection
    let conn = await oracledb.getConnection(config)

    // SQL INSERT statement
    let sql = `INSERT INTO Players ( email, pass_word, character_id, player_alias )
    VALUES ( :a, :b, :c, :d )`;

    // Values to be INSERTED into table
    let binds = [
      { a:'jt@gmail.com', b:'jt123', c:null, d:null },
      { a:'kt@gmail.com', b:'kt123', c:null, d:null },
      { a:'lz@gmail.com', b:'zp123', c:null, d:null },
      { a:'kl@gmail.com', b:'kl123', c:null, d:null },
      { a:'qr@gmail.com', b:'qtr23', c:null, d:null },
    ];

    // database options for values and return messages
    let options = {
      dmlRowCounts: true,
      autoCommit: true,
      batchErrors: true,
      };

      // execute the batch INSERT statement
      const result = await conn.executeMany(sql, binds, options);

      // log the results
      console.log('*** Dummy Data Entered ***', result.rows)
      // console.log(result);

      // return the queried data or results
      return result;

    } catch (error) {

    // log any errors to console if connection fails
    console.log(error.message + "\n")

    };

};


// addPlayer - add new player to database
// Object will be returned, table data in rows array of return object
const addPlayer = async( eMail, passWord ) =>{

  try {

    // create new connection
    let conn = await oracledb.getConnection(config);

    //execute sql statement
    let result = await conn.execute( `INSERT INTO Players ( email, pass_word ) VALUES (:0, :1)`, [ eMail, passWord ],{ autoCommit: true } );

    // successful transaction message
    // console.log("Rows inserted " + "\n", result.rowsAffected);

    // return the queried data or results
    return result;


    } catch (error) {

      // log any errors to console if connection fails
      console.log(error.message + "\n")

    }

};

// findPlayer - locate existing  player in database
// Object will be returned, table data in rows array of return object
const findPlayer = async( eMail, passWord ) =>{

  try {

    // create new connection
    let conn = await oracledb.getConnection(config);

    //execute sql statement
    let result = await conn.execute( `SELECT * FROM Players WHERE EMAIL='${eMail}' AND PASS_WORD='${passWord}'` );

    // successful transaction message
    // console.table( "*** Query Data***" + "\n", result.rows);
    return result;

    } catch (error) {

      // log any errors to console if connection fails
      console.log(error.message + "\n")

    }

};


// dummyData();
module.exports = {
  dummyData,
  addPlayer,
  findPlayer
};



