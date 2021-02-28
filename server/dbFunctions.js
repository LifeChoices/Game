// import oracledb package to connect to oracle database instance
const oracledb = require('oracledb');

// import database connection credentials
let config = {
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  connectString: 'localhost:1521/orclpdb'
}


// dummy data function
const dummyData = async() => {

  try {

    // create new connection
    let conn = await oracledb.getConnection(config)

    // SQL INSERT statement
    let sql = `INSERT INTO Players ( first_name, last_name, email, pass_word, character_id, player_alias )
    VALUES ( :a, :b, :c, :d, :e, :f )`;

    // Values to be INSERTED into table
    let binds = [
      { a:'James', b:'Thomas', c:'jt@gmail.com', d:'jt123', e:null, f:null },
      { a:'Kayla', b:'Turner', c:'kt@gmail.com', d:'kt123', e:null, f:null },
      { a:'Lorie', b:'Zepeda', c:'lz@gmail.com', d:'zp123', e:null, f:null },
      { a:'King' , b:'Leo',    c:'kl@gmail.com', d:'kl123', e:null, f:null },
      { a:'Queen', b:'Rabbit', c:'qr@gmail.com', d:'qtr23', e:null, f:null },
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
      console.log(result);

    } catch (error) {

    // log any errors to console if connection fails
    console.log(error.message + "\n")

    };

};


// addPlayer - add new player to database
const addPlayer = async(first_name, last_name, email, pass_word, character_id, player_alias) =>{

}

// findPlayer - locate existing  player in database
const findPlayer = async(first_name, last_name, email, pass_word, character_id, player_alias) =>{
  
}
module.exports = {
  dummyData
};

/*   Dummy Data RAW sql insert statements
INSERT INTO Players VALUES ( 1, 'James', 'Thomas', 'jt@gmail.com', 'jt123', null, null   );
INSERT INTO Players VALUES ( 2, 'Kayla', 'Turner', 'kt@gmail.com', 'kt123', null, null   );
INSERT INTO Players VALUES ( 3, 'Lorie', 'Zepeda', 'lz@gmail.com', 'lz123', null, null   );
INSERT INTO Players VALUES ( 4, 'King', 'Leo', 'kl@gmail.com', 'kl123', null, null   );
INSERT INTO Players VALUES ( 5, 'Queen', 'Rabbit', 'qr@gmail.com', 'qr123', null, null   );
*/

