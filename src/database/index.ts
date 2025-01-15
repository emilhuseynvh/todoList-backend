import { DataSource } from "typeorm";
import config from "../config";
import { User } from "./entity/User";
import { Note } from "./entity/Note";

export const dataSource = new DataSource({
    type: 'postgres',
    host: config.database.host,
    port: config.database.port,
    database: config.database.name,
    username: config.database.user,
    password: config.database.password,
    synchronize: true,
    // logging: true,
    entities: [User, Note]
})

dataSource.initialize()
.then(() => {
    console.log('database connected succesfully');
}).catch((err) => {
    console.log('database connection error', err);
})