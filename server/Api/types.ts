import {Request, Response} from "express";

export interface IProduct {
    id: number,
    date: Date,
    title: string,
    count: number,
    distance: number,
}

export interface IRequestProducts {
    getProducts(req: Request, res: Response<IProduct[]>): Promise<void>
}
