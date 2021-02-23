require('dotenv').config();
const express = require('express');
const path = require('path');

const oracledb = require('oracledb');

// create connection to oracle database
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

      // seeding the db with initial tables
      await connection.execute(`CREATE TABLE Characters (
        character_id number primary key,
        name varchar2(50),
        occupation varchar2(50),
        wallet number,
        experience number
        )`);

        await connection.execute(`CREATE TABLE Objects (
          object_id number primary key,
          obj_description varchar2(120),
          obj_effect varchar2(120),
          obj_limit number,  -- set to default
          obj_price number
          )`);

        await connection.execute(`CREATE TABLE Skills(
            skill_id number primary key,
            skill_description varchar2(120),
            skill_effect varchar2(120),
            required_experience number  -- set default limit
            )`);

        await connection.execute(`CREATE TABLE Players(
          player_id NUMBER primary key,
          first_name VARCHAR2(64),
          last_name VARCHAR2(64),
          email VARCHAR2(128),
          pass_word VARCHAR2(128),
          character_id NUMBER REFERENCES characters (character_id),
          player_alias VARCHAR2(64)
          )` );


      await connection.execute(`CREATE TABLE character_skills (
        skill_id number REFERENCES Skills (skill_id),
        skill_name varchar2(50),
        skill_level number
        )`);

      await connection.execute(`CREATE TABLE character_objects (
        object_id number REFERENCES Objects (object_id),
        object_name varchar2(2),
        object_amount number
        )`);


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

// invoke oracle connection function
run();

const port = 3000

const frontEnd = path.join(__dirname, '..', 'client', 'dist')

const app = express()

app.use(express.static(frontEnd))


app.listen(port, () => console.info(`http://localhost:${port}`))
