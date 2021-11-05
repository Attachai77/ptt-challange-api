import Knex, { Knex as IKnex } from 'knex';
import config from './config'

const connection = Knex<IKnex>({
  client: 'mysql',
  connection: {
    host : config.MYSQL.HOST,
    port : config.MYSQL.PORT,
    user : config.MYSQL.USERNAME,
    password : config.MYSQL.PASSWORD,
    database : config.MYSQL.DATABASE_NAME
  }
});

connection.raw("SELECT 1").then(() => {
  console.log("MySQL connected");
})
.catch((e) => {
  console.log("MySQL not connected");
  console.error(e);
});

export default connection