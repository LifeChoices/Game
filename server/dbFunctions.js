// import oracledb package to connect to oracle database instance
const e = require('express');
const oracledb = require('oracledb');


// import database connection credentials
let config = {
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  connectString: 'localhost:1521/orclpdb'
}


// Function - adds dummy data to db tables
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
      console.log('*** Dummy Data Entered ***')
      console.log(result);

    } catch (error) {

    // log any errors to console if connection fails
    console.log(error.message + "\n")

    };

};


// addPlayer - add new player to database
const addPlayer = async( eMail, passWord ) =>{

  try {

    // create new connection
    let conn = await oracledb.getConnection(config);

    //execute sql statement
    let result = await conn.execute( `INSERT INTO Players ( email, pass_word ) VALUES (:0, :1)`, [ eMail, passWord ],{ autoCommit: true } );

    // successful transaction message
    console.log("Rows inserted " + "\n", result.rowsAffected);


    } catch (error) {

      // log any errors to console if connection fails
      console.log(error.message + "\n")

    }

};

// findPlayer - locate existing  player in database
const findPlayer = async( eMail, passWord ) =>{

  try {

    // create new connection
    let conn = await oracledb.getConnection(config);

    //execute sql statement
    let result = await conn.execute( `SELECT player_id, character_id,player_alias FROM Players WHERE email= :0 AND PASS_WORD= :1`, [ eMail, passWord ],{ autoCommit: true }  );

    // successful transaction message
    // console.log( "*** Query Data***" + "\n", result.rows.forEach( row => {
    //   console.log( row )
    // }));

    return result;

    } catch (error) {

      // log any errors to console if connection fails
      console.log(error.message + "\n")

    }

};

// addPlayer( 'Player@gmail.com', 'Player123' );
findPlayer( 'test@gmail.com','test123' ).then( result =>{
  console.log(result);
} )

// dummyData();
module.exports = {
  dummyData,
  addPlayer,
  findPlayer
};

/*   Dummy Data RAW sql insert statements
INSERT INTO Players VALUES ( 1, 'James', 'Thomas', 'jt@gmail.com', 'jt123', null, null   );
INSERT INTO Players VALUES ( 2, 'Kayla', 'Turner', 'kt@gmail.com', 'kt123', null, null   );
INSERT INTO Players VALUES ( 3, 'Lorie', 'Zepeda', 'lz@gmail.com', 'lz123', null, null   );
INSERT INTO Players VALUES ( 4, 'King', 'Leo', 'kl@gmail.com', 'kl123', null, null   );
INSERT INTO Players VALUES ( 5, 'Queen', 'Rabbit', 'qr@gmail.com', 'qr123', null, null   );
*/

