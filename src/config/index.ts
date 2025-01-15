import dotenv from 'dotenv'
import path from 'path'

const envPath = path.join(__dirname, '../../.env');

dotenv.config({ path: envPath });

export default {
    databaseURL: process.env.DATABASE_URL,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET || 'supersecret',
    database: {
    port: Number(process.env.DB_PORT),
        host: process.env.HOST,
        user: process.env.USER,
        name: process.env.DATABASE,
        password: process.env.PASSWORD
    }
}