import { NextFunction, Request, Response } from "express"
import { z } from "zod"

const validationMiddleware = (schema: z.ZodObject<any>)  => {
    return (req: Request, res: Response, next: NextFunction) => {
        let { success, data, error } = schema.strict().safeParse(req.body)

        if(!success) res.status(400).json({ error: error?.issues[0].message })

        req.body = data
        next();
    }
}

export default validationMiddleware