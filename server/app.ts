import express from 'express';
import {Client, ClientConfig} from 'pg';
import {IConfigServer} from "./types";
import cros from './middleware/cros'
import configS from './config/server.config.json';
import configD from './config/database.config.json'
import RequestsProducts from "./Api/requestsProducts";

const app = express()

export const configDatabase: ClientConfig = {
    user: configD.user,
    password: configD.password,
    port: configD.port,
    host: configD.host,
    database: configD.database
}
const configServer: IConfigServer = {
    host: configS.host,
    port: process.env.PORT || configS.port
}
app.use(cros)
app.use(express.json())

app.get('/', RequestsProducts.getProducts)


app.listen(configServer, () => {
    console.log(`server start port: ${configServer.port}`)
})
