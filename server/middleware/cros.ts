import {NextFunction, Request, Response} from "express";
//устанавливаем правила CROS
export default (req: Request, res: Response<{}>, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,Origin");
    next()
}
