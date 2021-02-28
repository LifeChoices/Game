// import oracledb package to connect to oracle database instance
const oracledb = require('oracledb');

// create function to seed database with initial application schema
const dbSeed = async() =>{

  try {

    // connect to db via the pool alias 'lifeChoices'
    let conn = await oracledb.getConnection('lifeChoices');

    // execute SQL Statement to create database schema
    await conn.execute(`create schema authorization JAMES
    CREATE TABLE Characters (
      character_id number primary key,
      name varchar2(50),
      alias varchar2(50) unique,
      occupation varchar2(50),
      wallet number,
      experience number
      )
    CREATE TABLE Objects (
      object_id number primary key,
      obj_description varchar2(200),
      obj_effect varchar2(200),
      obj_limit number,  -- set to default
      obj_price number
      )
    CREATE TABLE Skills(
      skill_id number primary key,
      skill_description varchar2(200),
      skill_effect varchar2(200),
      required_experience number  -- set default limit
      )
    CREATE TABLE Players(
      player_id NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1) PRIMARY KEY,
      email varchar2(100),
      pass_word varchar2(100),
      character_id NUMBER REFERENCES characters (character_id),
      player_alias varchar2(100) REFERENCES characters (alias)
      )
    CREATE TABLE character_skills (
      skill_id number REFERENCES Skills (skill_id),
      skill_name varchar2(50),
      skill_level number
      )
    CREATE TABLE character_objects (
      object_id number REFERENCES Objects (object_id),
      object_name varchar2(20),
      object_amount number
      )`);

    // display message for successful Connection and Schema creation
    console.log('Oracle - Schema Created')

  } catch (error) {

    // log any errors to console if connection fails
    console.log(error.message + "\n")

  }
};

// invoke the Schema function to seed application database
module.exports = {
  dbSeed
};
