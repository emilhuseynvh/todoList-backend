export class AppError extends Error {
    public statusCode: number
    constructor(message: string, statusCode: number) {
        super(message);
    this.statusCode = statusCode;
    }
}

export class DublicateError extends AppError {
    constructor(message: string) {
        super(message, 409);
    }
}

export class NotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404);
    }
}

export class UnauthorizationError extends AppError {
    constructor(message: string) {
        super(message, 401);
    }
}

export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 400)
    }
}