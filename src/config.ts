import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  MYSQL: {
    HOST: process.env.MYSQL_HOST,
    PORT: Number(process.env.MYSQL_PORT),
    USERNAME: process.env.MYSQL_PORT,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE_NAME: process.env.MYSQL_DATABASE_NAME,
  },
  PORT: process.env.PORT,
  HOST: process.env.HOST,
}

export default config