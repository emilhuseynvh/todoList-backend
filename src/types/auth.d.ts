import { Request } from "express";
import { User } from "../database/entity/User";
import { z } from "zod";
import userValidation from "../validations/user.validation";

export type signUpParams = z.infer<typeof userValidation.signUp>

export type signInParams = z.infer<typeof userValidation.signIn>

export interface AuthorizedRequest extends Request {
    user? : User
}