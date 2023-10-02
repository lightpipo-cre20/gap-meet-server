import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise';

//DB 설정
const config = {
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    port: `${process.env.DB_PORT}`,
    password: `${process.env.DB_PWD}`,
    database: `${process.env.DB_NAME}`,
};

const pool = mysql.createPool(config);

export default pool