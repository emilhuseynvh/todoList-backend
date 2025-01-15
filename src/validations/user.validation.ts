import { z } from "zod";

const signUp = z.object({
    username: z.string().min(4),
    password: z.string().min(4),
    age: z.number().min(6)
})
const signIn = z.object({
    username: z.string().min(4),
    password: z.string().min(4)
})

const userValidation = {
    signUp,
    signIn
}

export default userValidation;

