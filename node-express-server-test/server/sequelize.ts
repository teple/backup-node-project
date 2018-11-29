import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.NODE_ENV === 'production'
  ? process.env.SEQUELIZE_HOST
  : 'localhost',
  port: process.env.NODE_ENV === 'production'
  ? parseInt(process.env.SEQUELIZE_PORT_PROD)
  : parseInt(process.env.SEQUELIZE_PORT_DEV),
  operatorsAliases: Sequelize.Op as any,
  database: process.env.SEQUELIZE_DATABASE,
  username: process.env.SEQUELIZE_USERNAME,
  password: process.env.SEQUELIZE_PASSWORD,
  modelPaths: [__dirname + '/models'],
  timezone: 'Asia/Tokyo'
});
