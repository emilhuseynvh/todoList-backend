import jwt from 'jsonwebtoken'
import config from '../config';

export const encodePayload = (payload: any) => {
    const token = jwt.sign(payload, config.jwtSecret);

    return token;
}

export const decodeToken = (token: string) => {
    try {
        let decoded: any = jwt.verify(token, config.jwtSecret);
        return decoded;
    } catch (err) {
        return false;
    }
}