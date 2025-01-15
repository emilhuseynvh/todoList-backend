import { Router } from "express";
import validationMiddleware from "../middlewares/validation.middleware";
import userValidation from "../validations/user.validation";
import authController from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/register', validationMiddleware(userValidation.signUp), authController.signUp)
authRouter.post('/login', validationMiddleware(userValidation.signIn), authController.signIn)

export default authRouter