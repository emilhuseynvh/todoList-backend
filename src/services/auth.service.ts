import { dataSource } from "../database";
import { User } from "../database/entity/User";
import { signInParams, signUpParams } from "../types/auth";
import { DublicateError, NotFoundError } from "../utils/error.util";
import * as bcrypt from 'bcrypt'
import { decodeToken, encodePayload } from "../utils/jwt.util";

const signUp = async (params: signUpParams) => {
    const userRepo = dataSource.getRepository(User);
    let existsUser = await userRepo.findOne({ where: { username: params.username }});

    if(existsUser) throw new DublicateError('User already exists');

    let user = userRepo.create(params);

    await userRepo.save(user);
    

    return user
}

const signIn = async (params: signInParams) => {
    const userRepo = dataSource.getRepository(User);

    const user = await userRepo.findOne({ where: { username: params.username }});
    
    if(!user) throw new NotFoundError('username or password is wrong');
    
    let checkPassword = await bcrypt.compare(params.password, user.password);
    console.log(checkPassword);
    
    if(!checkPassword) throw new NotFoundError('username or password is wrong');

    const token = encodePayload({userId: user.id});

    return {
        user: {
            ...user, 
            password: undefined
        },
        token
    }


}

const authService = {
    signUp,
    signIn
}

export default authService