require('dotenv').config();
const express = require('express');
const path = require('path');

const oracledb = require('oracledb');

const run = async() => {

  try {

    const connection = await oracledb.getConnection(
      {
        user: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        connectString: 'localhost:1521/orclpdb'
      }
      )
      console.log("Successfully connected to Oracle!");
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();

const port = 3000

const frontEnd = path.join(__dirname, '..', 'client', 'dist')

const app = express()

app.use(express.static(frontEnd))


app.listen(port, () => console.info(`http://localhost:${port}`))
