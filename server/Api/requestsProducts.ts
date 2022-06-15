import {IProduct, IRequestProducts} from "./types";
import {Request, Response} from "express";
import {Client} from "pg";
import {configDatabase} from "../app";
//класс запросов данных для таблицы
class RequestsProducts implements IRequestProducts {
    async getProducts(req: Request, res: Response<IProduct[] | { message: string }>): Promise<void> {
        const client = new Client(configDatabase)
        try {
            //подключение и запрос к базе PostgreSQL
            await client.connect()
            const products = await client.query('SELECT * FROM products')
            await client.end()
            res.status(200).json(products.rows)
        } catch (e) {
            res.status(500).json({message: "Не удалось получить данные"})
        }
    }

}

export default new RequestsProducts()
