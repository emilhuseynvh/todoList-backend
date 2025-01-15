import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await authService.signUp(req.body);
        res.json(user);
    } catch (err) {
        next(err);
    }
}

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user = await authService.signIn(req.body);
        res.json(user);
    } catch (err) {
        next(err);
    }
}

const authController = {
    signUp,
    signIn
}

export default authController;