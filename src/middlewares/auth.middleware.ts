import { NextFunction, Request, Response } from "express";
import { UnauthorizationError } from "../utils/error.util";
import { decodeToken } from "../utils/jwt.util";
import { dataSource } from "../database";
import { AuthorizedRequest } from "../types/auth";
import { User } from "../database/entity/User";

const authMiddleware = async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
    const userRepo = dataSource.getRepository('User')
    const { authorization } = req.headers;

    
    
    let token = authorization?.split(' ')[1]
    
    
    
    if (!authorization || !token) return next(new UnauthorizationError('unauthorization'));
    
    let payload = decodeToken(token);
    console.log(payload);
    if (!payload?.userId) return next(new UnauthorizationError('unauthorization'));

    let user = await userRepo.findOne({ where: { id: payload.userId } });  

    req.user = user as User;

    next();
}


export default authMiddleware