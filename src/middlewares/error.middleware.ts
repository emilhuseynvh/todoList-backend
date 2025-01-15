import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error.util";

const errorMiddleware = (err: AppError | Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
    } else {
        console.log(err);
        res.status(500).json({ error: err.message });
    }

     
}

export default errorMiddleware;