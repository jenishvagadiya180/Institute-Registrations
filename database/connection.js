
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const database = process.env.DATABASE_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = process.env.DIALECT

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});


const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { connectDatabase, sequelize, Sequelize };

