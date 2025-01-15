import "reflect-metadata";
import express from 'express';
import config from './config';
import cors from 'cors';
import './database'
import router from './routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', router)

app.use(errorMiddleware)

app.listen(config.port, () => {
    console.log(`application is running on ${config.port}`);
})