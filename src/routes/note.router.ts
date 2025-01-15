import { Router } from "express";
import validationMiddleware from "../middlewares/validation.middleware";
import noteValidation from "../validations/note.validation";
import noteController from "../controllers/note.controller";
import authMiddleware from "../middlewares/auth.middleware";

const noteRouter = Router();

noteRouter.post(
    '/',
    validationMiddleware(noteValidation.create),
    authMiddleware,
    noteController.create
);
noteRouter.delete(
    '/:id',
    authMiddleware,
    noteController.deleteNote
);

export default noteRouter;